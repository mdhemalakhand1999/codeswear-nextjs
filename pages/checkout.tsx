import Link from 'next/link'
import React from 'react'

const Checkout = ({cart, removeCart, addToCart, subtotal}) => {
  return (
    <div>
      <div className="container">
        <h1>1. Delivery Details</h1>
        <div className="wrapper-block flex gap-6">
          <div className='w-1/2'>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='w-1/2'>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="block-wide">
          <div className='w-full'>
              <div className="relative mb-4">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600">address</label>
                <textarea id="address" name="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
        </div>
        <div className="wrapper-block flex gap-6">
          <div className='w-1/2'>
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='w-1/2'>
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">city</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="wrapper-block flex gap-6">
          <div className='w-1/2'>
            <div className="relative mb-4">
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">state</label>
              <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='w-1/2'>
            <div className="relative mb-4">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">pincode</label>
              <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <h1>2. Review cart and  pay</h1>
        <div className=''>
          <div className='p-6'>
          {
            cart && Object.keys(cart).map((key) => {
              return(
                <div key={key}>
                    <div className='bg-pink-600'>
                        <div className="flex mb-5 p-10 flex-2 flex-col items-start justify-between text-sm">
                          <div className="single-item mb-7">
                            <h1 className='text-2xl text-white'><Link href={'/'}>{cart[key].name}</Link></h1>
                            <p className="text-white text-2xl block">Qty <span className="qty-minus text-2xl" onClick={()=> removeCart(23432, 1)}>-</span>{cart[key].qty}<span className='qty-plus text-2xl' onClick={() => {addToCart(23432, 1, 244, 'The Catcher in the Rye', 'XL, L,SM', 'Orange, Blue, Yellow')}} >+</span></p>
                          </div>
                          {/* single item end */}
                            <div className="flex">
                              <div className='bg-white p-4 mt-6'>
                                <h3 className='text-pink-700 text-2xl'>Subtotal: ${subtotal && subtotal}</h3>
                              </div>
                            </div>
                    </div>
                  </div>
                  <button className='p-3 text-white bg-pink-500'>Pay to: {subtotal && subtotal}</button>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout