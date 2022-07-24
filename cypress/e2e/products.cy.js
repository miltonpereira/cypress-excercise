'use strict'
/// <reference types="cypress" />

import { header } from '../pages/headerNav'
import { inventory } from '../pages/inventoryPage'
import { login } from '../pages/loginPage'
import { product } from '../pages/productPage'

describe('Product Details Page', () => {
  
  beforeEach(function (){

    let credentails = {username : "standard_user", password : "secret_sauce"}
    login.visitLoginPage()
    login.login(credentails);

  })

  it('Should display correct product meta data',() => {

    cy.fixture('productsData').then((data) => {
      let productName = "Sauce Labs Backpack"
      inventory.clickItem(productName)
      product.verifyProductDetails(data,productName)
    })

  })

  it('Should be able to navigate back to inventory page using Back to Products button',() => {

    product.visitProductPage(4)
    product.clickBackButton()
    inventory.verifyUrl()

  })

  it('Should be able to item to cart',() => {

    product.visitProductPage(4)
    product.verifyAddToCartButton()
    header.verifyCartBadgeCount()

  })

  it('Should be able to removed item from cart',() => {

    product.visitProductPage(4)
    product.verifyRemoveButton()
    header.verifyCartBadgeCount()

  })
  
})
