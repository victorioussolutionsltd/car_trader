import React from "react";
import { products, detailedProduct } from './data';

const ProductContext = React.createContext();

export class ProductProvider extends React.Component {
  state = {
    products: [...products],
    cart: [],
    modalOpen: false,
    modalTitle: "",
    modalInformation: ""
  };

  componentDidMount() {
      this.setProducts();
  }

  setProducts = () =>{
      let tempProducts = [];
      products.forEach(item => {
          const singleItem = {...item};
          tempProducts = [...tempProducts, singleItem];
      });

      this.setState(() => {
          return {products: tempProducts};
      })
  }

  getItem = (id) => {
    const product = this.state.products.find( item  => item.id === id );
    return product;
  }

  addToWishList = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const product = tempProducts[index];
    product.onWishList = true;

    this.setState(() => {
      return { products: tempProducts, recentlyExtendedList: "Wish List"}
    }, () => { console.log("added to wishList")})

  }

  removeFromWishList = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const wishItem = tempProducts[index];
    wishItem.onWishList = false;

    this.setState(() => {
      return { products: tempProducts}
    }, () => { console.log("removed from wishList")})
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price * product.count;

    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart] }
    }, () => { console.log("added to cart")})

  };

  removeFromCart = (id) => {
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(this.getItem(id));
  
      const cartItem = tempProducts[index];
      cartItem.inCart = false;
      cartItem.total = cartItem.price;
      cartItem.count = 0;
  
      this.setState(() => {
        return { products: tempProducts}
      }, () => { console.log("removed from cart")})
  
  }

  openModal = (id, desc) => {

    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const cartItem = tempProducts[index];

    
    const description = "Added " + cartItem.title; 
    this.setState(() => {
      return { modalOpen: true, modalInformation: description, modalTitle: desc};
    })
  }

  closeModal = (id) => {
    this.setState(() => {
      return {  modalOpen: false, modalInformation: "", modalTitle: ""}
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          addToWishList: this.addToWishList,
          removeFromWishList: this.removeFromWishList
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;