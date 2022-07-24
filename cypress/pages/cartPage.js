/// <reference types = "cypress"/>

import { globalAction } from "./globalActions"
import { Utility } from "./util"


class CartPage{

    cartPageUrl = `/?/cart.html` // cart page url
    // Page selectors 
    cartItemBlockSelector = ".cart_item_label" 
    itemMetaDataSelector = "[class^=\"inventory_item\"]"

    /**
     * 
     * @returns cart page url
     */

    visitCartPage =() => cy.visit(this.cartPageUrl).title().should('eq', 'Swag Labs')

    /**
     * This method is setting cart items in localstorage
     */

    cartItemBlock = () => cy.get(this.cartItemBlockSelector) 

    continueShoppingButton = () =>  cy.contains('Continue Shopping').should('be.visible')

    clickcontinueShoppingButton = () => this.continueShoppingButton().click()

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

    verifyItemBlockDetails = (items,title) => {
        globalAction.setItemInCart([0])
        const item = Utility.getItemByTitle(items,title)
        return this.cartItemBlock()
        .find(this.itemMetaDataSelector)
        .should(($elements) => {
            expect($elements[0]).to.contain(item['name'])
            expect($elements[1]).to.contain(item['description'])
            expect($elements[2]).to.contain(item['price'])
        })
    }

    /**
     * 
     * Checks if add to cart is working fine on the cart page
     */
    verifyAddToCartButton = () => {
        this.clickaddToCartButton()
        return this.removeButton()
    }

    /**
     * 
     * Methods to remove item form cart
     *
     */
    verifyRemoveButton = () => {
        return this.clickRemoveButton()
    }
  
}

export const cart = new CartPage();