import React from 'react'

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR.COM</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Code ID: #23422</h1>
              <p className="leading-relaxed mb-4">Your order has been successfully placed</p>
              <div className="flex mb-4">
                <a className="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1 text-center">Item Description</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Quantity</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Item Total</a>
              </div>
              <div className=" w-full border-t border-gray-200 py-2">
                    <div className="flex justify-between mb-5">
                      <div className="w-2/3 text-gray-500 border-pink-500 w-1/3 text-center ">Wear The Code ( XL/Black )</div>
                      <div className="w-1/3 text-gray-500 border-pink-500 w-1/3 text-center">1</div>
                      <div className="w-1/3 ml-auto text-gray-900 border-pink-500 w-1/3 text-center">499</div>
                    </div>
                    {/* item */}
                    <div className="flex justify-between mb-5">
                      <div className="w-2/3 text-gray-500 border-pink-500 w-1/3 text-center ">Wear The Code ( XL/Black )</div>
                      <div className="w-1/3 text-gray-500 border-pink-500 w-1/3 text-center">1</div>
                      <div className="w-1/3 ml-auto text-gray-900 border-pink-500 w-1/3 text-center">499</div>
                    </div>
                    {/* item */}
                    <div className="flex justify-between mb-5">
                      <div className="w-2/3 text-gray-500 border-pink-500 w-1/3 text-center ">Wear The Code ( XL/Black )</div>
                      <div className="w-1/3 text-gray-500 border-pink-500 w-1/3 text-center">1</div>
                      <div className="w-1/3 ml-auto text-gray-900 border-pink-500 w-1/3 text-center">499</div>
                    </div>
                    {/* item */}
              </div>
              <div className="flex flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">Subototal: $58.00</span>
                <div>
                  <button className="flex my-5 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
                </div>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order