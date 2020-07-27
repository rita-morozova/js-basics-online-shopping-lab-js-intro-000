var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*101)
  var object = {itemName: item, itemPrice: price}
  cart.push(object)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(getCart.length ===0){
    return "Your shopping cart is empty."
  }//if 
   else if (getCart.length ===1){
    return `In your cart, you have ${getCart.itemName[0]} at ${getCart.itemPrice[0]}.`
   } //else if 
  else {
    for (let i=0; i < getCart.length; i++){
      
    } //for 
  } //else
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
