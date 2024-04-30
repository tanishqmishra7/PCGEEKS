import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Product from '../models/Product';
const mongoose = require("mongoose");

import { useRouter } from 'next/router'

const productC = ({ }) => {

  const router = useRouter()
  return (
    <div className='bg-bgcolor '>
      <section className="text-white body-font min-h-screen">
        <div className="container h-screen flex items-center justify-center">
          <Link href={"/products?category=Monitor"}><span className='hover:text-red-700 hover:border-red-700 hover:text-2xl text-xl border-solid border cursor-pointer rounded border-grey-800 p-20 m-5'>Monitor</span></Link>
          <Link href={"/products?category=Processor"}><span className='hover:text-red-700 hover:border-red-700 hover:text-2xl text-xl border-solid border cursor-pointer rounded border-grey-800 p-20 m-5'>Processor</span></Link>
          <Link href={"/products?category=GraphicCard"}><span className='hover:text-red-700 hover:border-red-700 hover:text-2xl text-xl border-solid border cursor-pointer rounded border-grey-800 p-20 m-5'>Graphic Card</span></Link>
          <Link href={"/products?category=KeyboardMouse"}><span className='hover:text-red-700 hover:border-red-700 hover:text-2xl text-xl border-solid border cursor-pointer rounded border-grey-800 p-20 m-5'>Accessories</span></Link>
          <Link href={"/products?category=Storage"}><span className='hover:text-red-700 hover:border-red-700 hover:text-2xl text-xl border-solid border cursor-pointer rounded border-grey-800 p-20 m-5'>Storage</span></Link>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  
  let allproducts = await Product.find()

  return {
    props: { products: JSON.parse(JSON.stringify(allproducts))}
  }
}

export default productC
