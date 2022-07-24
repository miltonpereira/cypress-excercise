/// <reference types = "cypress"/>

import { Utility } from "./util"


class CheckoutPage{

    checkoutPageUrl = `/?/checkout-step-one.html`

    visitCheckoutPage =() => cy.visit(this.checkoutPageUrl).title().should('eq', 'Swag Labs')
 
    checkoutInfoSelector = fieldName => `[data-test=\"${fieldName}\"]`
    firstNameSelector =  this.checkoutInfoSelector("firstName")
    lastNameSelector = this.checkoutInfoSelector("lastName")
    postalCodeSelector = this.checkoutInfoSelector("postalCode")
    errorMessageSelector = this.checkoutInfoSelector("error")
    
    enterFirstName = firstName => cy.get(this.firstNameSelector).clear().type(firstName)

    enterLastName = lastName => cy.get(this.lastNameSelector).clear().type(lastName)

    enterPostalCode = postalCode => cy.get(this.postalCodeSelector).clear().type(postalCode)
    
    continueButton = () => cy.contains("Continue")

    clickContinueButton = () => this.continueButton().click()

    errorMessage = errorMessage => cy.get(this.errorMessageSelector).should('have.text',errorMessage)


    submitCheckoutForm = () => {
        this.enterFirstName("Milton")
        this.enterLastName("Pereira")
        this.enterPostalCode("Dude")
        return this.clickContinueButton()
    }

    emptyFormSubmit = (error) => {
        this.clickContinueButton()
        return this.errorMessage(error)

    }


}

export const checkout = new CheckoutPage();