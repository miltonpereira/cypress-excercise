
class Util{

    /**
     * 
     * @param {'String'} content 
     * @returns price without $ sign
     */

    localStorageCartKey = "cart-contents"
    regex = /[^\d.]+/;

    normalizeText = content => content.replace(this.regex, '')

    getCartItems = () =>{
  
        let cartItems = JSON.parse(localStorage.getItem("cart-contents"));
        if (cartItems == undefined || null) {
            cartItems = [];
 
        } else {
            cartItems = cartItems; 
        }
    
        return cartItems;
    }

    calculateItemTotalPrice = (itemData) => {
        let cartTotal = 0
        const cartItemsId = this.getCartItems();

        for (const itemId in cartItemsId) {

            cartTotal = cartTotal + itemData[cartItemsId[itemId]].price;
        }

        return cartTotal

    }

    taxCalculation = (orderTotal) => {

        const tax = ((orderTotal * 0.08).toFixed(2));   
        return parseFloat(tax)
    }

    calculateOrderTotal  = (cartTotal,taxTotal) => {
        const total = (cartTotal + taxTotal)
        return total
     }

    getCartItemTotal = (itemData) =>{
        const orderTotal = this.calculateItemTotalPrice(itemData)
        const tax = this.taxCalculation(orderTotal)
        const Total = this.calculateOrderTotal(orderTotal,tax)

        return {"cartTotal":orderTotal,"orderTax":tax, "orderTotal":Total}
     
      
    }


    getItemById = (itemsData) => {
        //cy.log(itemsData)
        let item = 0;

        const cartItemsId = this.getCartItems();
        let totalItems = itemsData.length
        for(let i = 0; i < totalItems; i++) {
            if(itemsData[i]["id"] == cartItemsId){
                itemsData[i]
                item = itemsData[i]
            }
        }
        return item
       
    }

    /**
     * 
     * @param {Array} itemsData 
     * @param {String} title 
     * @returns Json Object
     */
    getItemByTitle= (itemsData,title) => {
        
            let item 
            let totalItems = itemsData.length
            for(let i = 0; i < totalItems; i++) {
                if(itemsData[i]["name"] == title){
                    itemsData[i]
                    item = itemsData[i]
                }
            }
            return item

    }

}


export const Utility = new Util();
