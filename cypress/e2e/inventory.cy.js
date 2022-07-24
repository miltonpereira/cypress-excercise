/// <reference types="cypress" />
import { header } from '../pages/headerNav'
import { inventory } from '../pages/inventoryPage'
import { login } from '../pages/loginPage'


describe('Test Inventory Page', () => {

  beforeEach(() => {
    let credentails = {username : "standard_user", password : "secret_sauce"}
    login.visitLoginPage()
    login.login(credentails);
  })

  it('Should be able to add single item to cart', () => {

    let item = 1
    inventory.clickCartButton(item);
    header.cartCount(item);
  })

  it('Should be able to add multiple items to cart', () => {

    let item = 2
    inventory.clickCartButton(item);
    header.cartCount(item);
  })

  it('Should be able to navigate to item details page',() => {

    cy.fixture('productsData').then((item) => {
      inventory.clickItem(item[1].name)
    });
  })

})
