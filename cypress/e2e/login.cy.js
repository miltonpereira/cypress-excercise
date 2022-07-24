/// <reference types="cypress" />
import { inventory } from '../pages/inventoryPage'
import {login} from '../pages/loginPage'



describe('Test Login', () => {
  beforeEach(() => {
    login.visitLoginPage()
  })

  it('Should be able to login with valid credentails', () => {

    cy.fixture('users').then((users) => {
      let credentails = {username : users.validUser.username, password : users.validUser.password}
  
      login.login(credentails)
      inventory.verifyUrl()
    })
  })

  it('Should not be able to login with invalid credentails', () => {
    cy.fixture('users').then((users) => {
      let credentails = {username : users.invalidUser.username, password : users.invalidUser.password}
      login.login(credentails)
      login.errorMessage(users.invalidUser.errorText)
    })
  })
  

})
