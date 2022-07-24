/// <reference types = "cypress"/>

class LoginPage{

    usernameField = '[data-test="username"]'
    passwordField = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'

    
    visitLoginPage =() => cy.visit("/").title().should('eq', 'Swag Labs')

    enterUsername = username => cy.get(this.usernameField).clear().type(username,{log:false})

    enterPassword = password => cy.get(this.passwordField).clear().type(password,{log:false})

    clickLoginButton = () => cy.get(this.loginButton).click()

    errorMessage = error => cy.get('[data-test="error"]').should('be.visible').and('have.text',error)

    verifyLoginUrl = () => cy.url().should('include', "/")


    login = async creds => {
        this.enterUsername(creds.username)
        this.enterPassword(creds.password)
        return this.clickLoginButton()
    }

}

export const login = new LoginPage();