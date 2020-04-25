import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();

//Whenever we create a context object it comes with two components, one of them being consumer and other provider

// Provider provides all information for all application, so we setup our provider on top of application
//Then whenever we want to use that information that the provider is gonna provide we will use the consumer

//This way we are saving ourselfs from prop drilling. And we will be able to grab them from whever in the application


class ProductProvider extends Component {

    state={
        products:storeProducts,
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct
     }
componentDidMount(){
    this.setProducts();
}

setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item=> {
         const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
})
this.setState(()=> {
    return {products: tempProducts};
})
}
getItem = (id) => {
const product = this.state.products.find(item=>  item.id == id);
return product;
};

handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(
      ()=>{
        return {detailProduct: product};
      }
    )
  };

  addToCart = id => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProducts]
        };
      },
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
