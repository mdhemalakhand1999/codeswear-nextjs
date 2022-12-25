import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './components/header'
import {useEffect} from 'react';
import Footer from './components/footer'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setcart] = useState({})
  const [subtotal, setsubtotal] = useState(0)
  useEffect(() => {
    if(localStorage.getItem('cart')) {
      setcart(JSON.parse(localStorage.getItem('cart')));
      saveCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subtotal = 0;
    for(let i=0; i < Object.keys(myCart).length; i++) {
      let subt = myCart[Object.keys(myCart)[i]].price * myCart[Object.keys(myCart)[i]].qty;
      subtotal += subt;
    }
    setsubtotal(subtotal);
  }
  const clearCart = () => {
    setcart({});
    saveCart({});
  }
    
  
  const removeCart = (itemCode, qty) => {
    let newCart = cart;
    
    if(itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty;
    }

    if(newCart[itemCode].qty <= 0) {
        delete newCart[itemCode]
      }
      setcart(newCart);
      saveCart(newCart);
  }
  const addToCart = (itemCode, qty, price, name, size, varient ) => {
    let newCart = cart;
    if(itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = {qty: 1, price, name, size, varient
      };
    }
    setcart(newCart);
    saveCart(newCart);
  }
  return <><Header cart={cart} addToCart={addToCart} removeCart={removeCart} clearCart={clearCart}/>
    <Component subtotal={subtotal} cart={cart} addToCart={addToCart} removeCart={removeCart} clearCart={clearCart} {...pageProps} />
  <Footer/></>;
}
