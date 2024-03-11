const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchase: []
}

let item = {
  name: 'Cheerios',
  price: 7.50,
}



let store = {
  tax(user){
    let index = user.cart.length -1;
    let numholder = user.cart[index].price * 1.03;
    let decimitized = numholder.toFixed(2);
    return index.price = parseFloat(decimitized);
  },
  addToCart(user, product){
    user.cart.push(product);
    this.tax(user);  
  },
 
  buyOneItem(user){
    let inCart = `Pick the number of the item in the cart `;
    let messageFrag = '';
    for(let index =0; index < user.cart.length; index++){
      messageFrag =` item# (${index}) ${user.cart[index].name} |`;
      console.log(user.cart[index])
      inCart = inCart + messageFrag;
      console.log(inCart)
    }
  
    let promptValue = prompt(inCart);;
    // console.log(promptValue);
    let pushItem = user.cart[promptValue];
    user.purchase.push(pushItem);
    user.cart.splice(promptValue -1, 1);
    console.log(user.cart.splice(promptValue -1, promptValue))
    console.log('this is the user cart array ', user.cart)
    console.log('this is user purchase array ', user.purchase)
  },
  buyEverything(user){
    user.cart.forEach(x => user.purchase.push(x));
    user.cart = [];
    console.log('this is the user cart array ', user.cart)
    console.log('this is user purchase array ', user.purchase)
  },
  emptyCart(user){
    user.cart = [];
  }

};

