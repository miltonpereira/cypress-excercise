/// <reference types = "cypress"/>

import { Utility } from "./util"


class CheckoutConfirmPage {

    checkoutConfirmPageUrl = `/?/checkout-step-two.html`

    visitCheckoutConfirmPage = () => cy.visit(this.checkoutConfirmPageUrl).title().should('eq', 'Swag Labs')

    itemTotal = () => cy.get('.summary_subtotal_label')
    taxAmount = () => cy.get('.summary_tax_label')
    totalAmount = () => cy.get('.summary_total_label')
    cancelButton = () =>cy.contains('Cancel')
    clickCancelButton = () => this.cancelButton().click()
    finishButton = () => cy.contains('Finish')
    clickFinishButton = () =>  this.finishButton().click()


    verifyItemBlockDetails = (items) => {
        const item = Utility.getItemById(items)
        return cy.get('.cart_item_label')
        .find("[class^=\"inventory_item\"]")
        .should(($elements) => {
            expect($elements[0]).to.contain(item['name'])
            expect($elements[1]).to.contain(item['desc'])
            expect($elements[2]).to.contain(item['price'])
        })
    }

    verifyItemTotalSummary = (itemData) => {
        const orderTotalSummary = Utility.getCartItemTotal(itemData)

        this.itemTotal()
        .should(($element) => {
            let actualValue = (parseFloat(Utility.normalizeText($element.text())).toFixed(2))
            let expectedValue = (orderTotalSummary.cartTotal).toFixed(2)
            expect(actualValue).to.eql(expectedValue)
  
        })
  
        this.taxAmount()
        .should(($element) => {
            let actualValue = (parseFloat(Utility.normalizeText($element.text())).toFixed(2))
            let expectedValue = (orderTotalSummary.orderTax).toFixed(2)
            expect(actualValue).to.eql(expectedValue)
  
        })
        this.totalAmount()
        .should(($element) => {
            let actualValue = (parseFloat(Utility.normalizeText($element.text())).toFixed(2))
            let expectedValue = (orderTotalSummary.orderTotal).toFixed(2)
            expect(actualValue).to.eql(expectedValue)
  
        })
    }

    verifyOrderSuccess = () => {
        this.fisnhButton()
    }

    verifyOrderCancel = () => {

    }

}

export const checkoutConfirm = new CheckoutConfirmPage();