'use strict'
/// <reference types="cypress" />

import { login } from '../pages/loginPage'
import { checkout } from '../pages/checkout'
import { globalAction } from '../pages/globalActions'

describe('Checkout Info', () => {

  beforeEach(function (){

    let credentails = {username : "standard_user", password : "secret_sauce"}
    login.visitLoginPage()
    login.login(credentails);
  })

  it('Should be able to continue to checkout step 2',() => {

      globalAction.setItemInCart([0])
      checkout.visitCheckoutPage()
      checkout.submitCheckoutForm()
  }) 

  it('Should see error message on empty submit',() => {

    cy.fixture('errors').then((error) => {

      globalAction.setItemInCart([0])
      checkout.visitCheckoutPage()
      checkout.emptyFormSubmit(error.checkoutInfo.firstNameError)

    })
  }) 
})
