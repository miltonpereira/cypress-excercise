/// <reference types = "cypress"/>

import { Utility } from "./util"

class ProductPage{

    //productPageUrl = (id) => `inventory-item.html?id=${id}`

    visitProductPage =(id) => cy.visit(`/?/inventory-item.html?id=${id}`).title().should('eq', 'Swag Labs')

    productTitle = () => cy.get('.inventory_details_name')

    productDescription = () => cy.get('.inventory_details_desc')

    productPrice = () => cy.get('.inventory_details_price')

    productMetaData = () => cy.get('.inventory_details_desc_container')

    backButton = () =>  cy.contains('Back to products').should('be.visible')

    clickBackButton = () => this.backButton().click()

    addToCartButton = () =>  cy.contains('Add to cart').should('be.visible')
    clickaddToCartButton = () => this.addToCartButton().click()
    
    removeButton = () =>  cy.contains('Remove').should('be.visible')
    clickRemoveButton = () => this.removeButton().click()

    

    /**
     * 
     * @param {Number} nth 
     * 
     */
    selectItem = nth => cy.get(`.inventory_list > :nth-child(${nth}) button`)
    selectSortOption = option => cy.get(this.itemSortSelector).select(option,{ force: true })
    selectItem = itemName => cy.contains(itemName)
    clickItem = (title) => this.selectItem(title).click()

    /**
     * This method is verifying product meta data on the product details page
     * @param {array} items 
     * @param {string} title 
     */

    verifyProductDetails = (items,title) => {
        const item = Utility.getItemByTitle(items,title)
        return this.productMetaData()
        .find("[class^=\"inventory_details\"]")
        .should(($elements) => {
            //cy.log($elements[1])
            expect($elements[0]).to.contain(item['name'])
            expect($elements[1]).to.contain(item['description'])
            expect($elements[2]).to.contain(item['price'])
        })
    }

    verifyAddToCartButton = () => {
        this.clickaddToCartButton()
        this.removeButton()
    }

    verifyRemoveButton = () => {
        this.clickaddToCartButton()
        this.clickRemoveButton()
        this.addToCartButton()
    }

    getPrice = () => {
        let itemPrice = []
        cy.get(this.itemListSelector).each(($row) => {
            cy.wrap($row).invoke('text').then((text) => { 
                itemPrice.push(parseFloat(this.normalizeText(text)))
            })
        })
        cy.wrap(itemPrice).then(() => {
            // when this callback runs, both lists will be populated
            const data =  itemPrice
            expect(data).to.be.descending
            cy.log(data)
          })

        //
        }
}

export const product = new ProductPage();