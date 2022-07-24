'use strict'
/// <reference types="cypress" />
import { header } from '../pages/headerNav'
import { inventory } from '../pages/inventoryPage'
import { login } from '../pages/loginPage'
import { cart } from '../pages/cartPage'
import { globalAction } from '../pages/globalActions'


describe('Cart Page', () => {
  beforeEach(function (){
    let credentails = {username : "standard_user", password : "secret_sauce"}
    login.visitLoginPage()
    login.login(credentails);
  })

  it('Should display correct product meta data',() => {

    cy.fixture('productsData').then((data) => {
      let productName = "Sauce Labs Bike Light"
      cart.visitCartPage()
      cart.verifyItemBlockDetails(data,productName)
    })
  })

  it('Should be able to navigate using Continue Shopping button',() => {

    globalAction.setItemInCart([0])
    cart.visitCartPage()
    cart.clickcontinueShoppingButton()
    inventory.verifyUrl()
  })

  it('Should be able to remove item from cart',() => {
    
    globalAction.setItemInCart([0])
    cart.visitCartPage()
    cart.verifyRemoveButton()
    header.verifyCartBadgeCount()
  })

  it('Should get logged out if session is cleared',() => {

    globalAction.setItemInCart([0])
    cart.visitCartPage()
    globalAction.clearCookies()
    cart.clickcontinueShoppingButton()
    login.verifyLoginUrl()
  })


  
})
