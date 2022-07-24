'use strict'
/// <reference types="cypress" />

import { login } from '../pages/loginPage'
import { globalAction } from '../pages/globalActions'
import { checkoutConfirm } from '../pages/checkoutConfirm'
import { checkoutComplete } from '../pages/checkoutComplete'
import { inventory } from '../pages/inventoryPage'

describe('Checkout Confirmation page', () => {

  beforeEach(function (){

    login.visitLoginPage()
    cy.login()

  })

  it('Should display correct product meta data',() => {

    cy.fixture('itemList').then((itemData) => {
      globalAction.setItemInCart([0])
      checkoutConfirm.visitCheckoutConfirmPage()
      checkoutConfirm.verifyItemBlockDetails(itemData)

    })

  }) 

  it('Should display correct order total summary',() => {

    cy.fixture('itemList').then((itemData) => {

      globalAction.setItemInCart([0])
      checkoutConfirm.visitCheckoutConfirmPage()
      checkoutConfirm.verifyItemTotalSummary(itemData)

    })

  })

  it('Should be able to place order',() => {

    cy.fixture('itemList').then((itemData) => {

      globalAction.setItemInCart([0])
      checkoutConfirm.visitCheckoutConfirmPage()
      checkoutConfirm.verifyItemTotalSummary(itemData)
      checkoutConfirm.clickFinishButton()
      checkoutComplete.verifyUrl()
    })
  }) 

  it('Should be able to cancel order',() => {

    cy.fixture('itemList').then((itemData) => {

      globalAction.setItemInCart([0])
      checkoutConfirm.visitCheckoutConfirmPage()
      checkoutConfirm.verifyItemTotalSummary(itemData)
      checkoutConfirm.clickCancelButton()
      inventory.verifyUrl()

    })
  })
})
