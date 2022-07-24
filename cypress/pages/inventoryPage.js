/// <reference types = "cypress"/>

import { Utility } from "./util"


class InventoryPage{

    inventoryUrl = "/inventory.html"
    itemListSelector = ".inventory_list .inventory_item_price"
    itemSortSelector = '[data-test="product_sort_container"]'
    

    selectAddToCart = nth => cy.get(`.inventory_list > :nth-child(${nth}) button`)

    selectSortOption = option => cy.get(this.itemSortSelector).select(option,{ force: true })

    selectItem = itemName => cy.contains(itemName)

    clickItem = (title) => this.selectItem(title).click()


    sorting = () => {

        this.selectSortOption('Price (low to high)')
        this.getPrice()
  
    }

    clickCartButton =(item) => {

        for (let nth=1; nth<=item; nth++){
            cy.log(nth)
            this.selectAddToCart(nth).should('be.visible').and('have.text','Add to cart').click()
        }
    } 

    addOneItem =() => this.selectItem(1).should(be.visbile).click()

    verifyPageTitile = () => cy.title().should('eq', 'Swag Labs')

    verifyUrl = () => cy.url().should('include', this.inventoryUrl)

}

export const inventory = new InventoryPage();
