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
  createdUser:'',
  createdItem:'',
  tax(user){
    let index = this.createdUser.cart.length -1;
    let numholder = this.createdUser.cart[index].price * 1.03;
    let decimitize = numholder.toFixed(2);
    return index.price = parseFloat(decimitize);
  },
  addToCart(user, product){
    this.createdUser = user;
    this.createdItem = product;
    this.createdUser.cart.push(this.createdItem);
    this.createdUser.cart[0].price = this.tax(this.createdUser);
    return store.createdUser;
  },
 
  buyOneItem(user){
    let inCart = `Pick the number of the item in the cart `;
    let messageFrag = '';
    for(let index =0; index < this.createdUser.cart.length; index++){
      messageFrag =` item# (${index}) ${this.createdUser.cart[index].name} |`;
      inCart = inCart + messageFrag;
      console.log(inCart)
    }
    let promptValue = prompt(inCart);
    let pushItem = this.createdUser.cart[promptValue];
    this.createdUser.purchase.push(pushItem);
    this.createdUser.cart.splice(promptValue -1, 1);
    return 'this is the user cart array ', this.createdUser.cart, 
      'this is user purchase array ', this.createdUser.purchase;
  },
  emptyCart(user){
    this.createdUser.cart = [];
  },
  buyEverything(user){
    this.createdUser.cart.forEach(x => this.createdUser.purchase.push(x));
    this.emptyCart();
    return 'this is the user cart array ', this.createdUser.cart, 
      'this is user purchase array ', this.createdUser.purchase;
  }
 

};