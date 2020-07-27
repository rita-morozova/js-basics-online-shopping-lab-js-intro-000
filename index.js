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
  if(cart.length ===0){
    return "Your shopping cart is empty."
  }//if 
   else if (getCart.length ===1){
    return `In your cart, you have ${getCart[0].itemName} at ${getCart[0].itemPrice}.`
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
