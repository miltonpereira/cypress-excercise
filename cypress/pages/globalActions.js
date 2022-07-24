/// <reference types = "cypress"/>

import { Utility } from "./util"

class GlobalActions{

    localStorageCartKey = "cart-contents"

    clearCookies = () => cy.clearCookie('session-username').should('be.null')

    setItemInCart = (itemId) => {
        localStorage[this.localStorageCartKey] = JSON.stringify(itemId);
        return localStorage[this.localStorageCartKey]
    }


}

export const globalAction = new GlobalActions();