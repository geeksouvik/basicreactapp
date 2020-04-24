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

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const product = this.getItem(id);
    const index = tempProducts.indexOf(product);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(()=>{
      return {products:tempProducts, cart:[...this.state.cart, product]}
    },
    ()=>{
      this.addTotals();
    })
 };
render() {
    return (
       <ProductContext.Provider value={{
           ...this.state,
           handleDetail:this.handleDetail,
           addToCart:this.addToCart

       }}>
           {this.props.children}
       </ProductContext.Provider>
      
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
