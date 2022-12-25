import Link from 'next/link'
import React from 'react'
import { FaBeer } from 'react-icons/fa';
import Navbar from './navbar';


const Header = ({cart, addToCart, clearCart, removeCart}) => {
  return (
      <div>
        <div className="container mx-auto">
            <nav className="flex justify-between align-middle">
                <div className="logo">
                    <Link href='/'>
                        <img src="https://www.codeswear.com/_next/image?url=%2Flogo.png&w=256&q=75" alt="" />
                    </Link>
                </div>
                <Navbar cart={cart} addToCart={addToCart} clearCart={clearCart} removeCart={removeCart}/>
            </nav>
        </div>
    </div>
  )
}

export default Header