/// <reference types = "cypress"/>

import { Utility } from "./util"


class CheckoutCompletePage {

    checkoutConfirmPageUrl = `/checkout-complete.html`

    visitCheckoutConfirmPage = () => cy.visit(this.checkoutConfirmPageUrl).title().should('eq', 'Swag Labs')

    verifyUrl = () => cy.url().should('contain', this.checkoutConfirmPageUrl)

}

export const checkoutComplete = new CheckoutCompletePage();