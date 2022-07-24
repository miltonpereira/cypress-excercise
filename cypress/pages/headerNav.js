/// <reference types = "cypress"/>

class HeaderNavigation{

    cartBadge = ".shopping_cart_badge"
    
    cartCount =(count) => cy.get('.shopping_cart_badge')
    .invoke('text')
    .then(parseFloat)
    .should('be.eq',count)

    itemCount =  () => {
        return cy.get('.shopping_cart_badge').then(($badgeCount) => {
            count = $badgeCount.text()
        })
    }

    verifyPageTitile = () => cy.title().should('eq', 'Swag Labs')

    verifyUrl = () => cy.url().should('include', this.inventoryUrl)
    /**
     * This method checks if cart badge count on header increases or decreases on remove
     * It should check if no badge is displays if there no products in the cart
     */

    verifyCartBadgeCount =  () => {  
        cy.get(".shopping_cart_link").then($body => {
            const element = $body.find(".shopping_cart_badge")
            const elementLenght= element.length
            if (elementLenght > 0) {  
                let count = parseFloat(element.text())
                expect(count).to.greaterThan(0) 
            }else {
                expect(elementLenght).to.be.eq(0) 
            }    
        })
    }
    
}

export const header = new HeaderNavigation();