'use strict'
/// <reference types="cypress" />

import { login } from '../pages/loginPage'
import { checkoutConfirm } from '../pages/checkoutConfirm'
import { globalAction } from '../pages/globalActions'

describe('Checkout Confirmation page', () => {

  beforeEach(function (){

    login.visitLoginPage()
    cy.login()
  })

  it('Should see correct product meta data',() => {

    cy.fixture('itemList').then((itemData) => {

      globalAction.setItemInCart([0])
      checkoutConfirm.visitCheckoutConfirmPage()
      checkoutConfirm.verifyItemBlockDetails(itemData)

    })
  }) 

})
