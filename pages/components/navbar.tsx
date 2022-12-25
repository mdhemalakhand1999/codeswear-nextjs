import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaBeer } from 'react-icons/fa'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


  
  

const Navbar = ({cart, addToCart, removeCart, clearCart}) => {
    const [open, setOpen] = useState(true);
    const setOpenCart = () => {
        setOpen(true);
    }
    // where is onClick?
  return (
    <div>
        <div className="menu">
            <Link href={'/tshirt'} className='mx-3'>Tshirt</Link>
            <Link href={'/hoodies'} className='mx-3'>Hoodies</Link>
            <Link href={'/sticker'} className='mx-3'>Stickers</Link>
            <Link href={'/mugs'} className='mx-3'>Mugs</Link>
        </div>
        <div className="cart">
            <FaBeer onClick={setOpenCart}/>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                    <div className="ml-3 flex h-7 items-center">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {
                                            cart && Object.keys(cart).map((key) => {
                                                return(
                                                <li key={key} className="flex py-6" >
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        src={'https://cdn4.buysellads.net/uu/1/127574/1668535591-SStk2-1.jpg'}
                                                        alt={'image alt'}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href={'#'}>{cart[key].name}</a>
                                                        </h3>
                                                        <p className="ml-4">${cart[key].price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{cart[key].size}</p>
                                                    </div>
                                                    {/* first ta id, second ta koyta item remove  */}
                                                    {/* where is onclick? */}
                                                    <div className="flex flex-2 flex-col items-start justify-between text-sm">
                                                        <p className="text-gray-500 block">Qty <span className="qty-minus text-2xl" onClick={()=> removeCart(23432, 1)}>-</span>{cart[key].qty}<span className='qty-plus text-2xl' onClick={() => {addToCart(23432, 1, 244, 'The Catcher in the Rye', 'XL, L,SM', 'Orange, Blue, Yellow')}} >+</span></p>
                                                        <p className="text-gray-500 block">Varient: {cart[key].varient}</p>

                                                        <div className="flex">
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        >
                                                            Remove
                                                        </button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </li>
                                                )
                                            })
                                        }
                                        
                                        
                                    </ul>
                                    </div>
                                </div>
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$262.00</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                    <a
                                    href="#"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                    Checkout
                                    </a>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                    <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500" onClick={clearCart}>
                                        Clear Cart
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </div>
                </Dialog>
                </Transition.Root>
        </div>
    </div>
  )
}

export default Navbar