import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer className="text-white body-font bg-bgcolor">
        <div className="container px-5 md:pl-24 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                <Image src='/logo.png' alt='lg' width={300} height={88} />

              </a>
            </Link>
            <p className="mt-2 text-sm text-gray-500 ml-8 font-semibold">The Perfect PC Shop</p>
            <p className="text-sm text-gray-500 mx-8"></p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SHOP</h2>

              <nav className="list-none mb-10">
                <li>
                  <Link href={"/products?category=Monitor"}><a className="text-white hover:text-red-800">Monitor</a></Link>
                </li>
                <li>
                  <Link href={"/products?category=Processor"}><a className="text-white hover:text-red-800">Processor</a></Link>
                </li>
                <li>
                  <Link href={"/products?category=GraphicCard"}><a className="text-white hover:text-red-800">Graphic Card</a></Link>
                </li>
                <li>
                  <Link href={"/products?category=KeyboardMouse"}><a className="text-white hover:text-red-800">Accessories</a></Link>
                </li>
                <li>
                  <Link href={"/products?category=Storage"}><a className="text-white hover:text-red-800">Storage</a></Link>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/markettrends"}><a className="text-gray-600 hover:text-gray-800">Market Trends</a></Link>
                </li>
                <li>
                  <Link href={"/articles"}><a className="text-gray-600 hover:text-gray-800">Articles</a></Link>
                </li>
                <li>
                  <Link href={"/learn"}><a className="text-gray-600 hover:text-gray-800">Learn</a></Link>
                </li>
                <li>
                  <Link href={"/contactus"}><a className="text-gray-600 hover:text-gray-800">Contact Us</a></Link>
                </li>
              </nav>
            </div> */}

            <div className="lg:w-96 md:w-3/4 w-full">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-white text-justify" ><strong>PC Geeks</strong> Welcome to PC Geeks, your one-stop destination for all your computing needs! We are a team of passionate tech enthusiasts dedicated to providing top-notch products and exceptional customer service. At PC Geeks, we believe in empowering our customers with the latest and most advanced computing solutions to enhance their digital experiences.</p>
                </li>

              </nav>
            </div>
          </div>
        </div>
        <div className="bg-bgcolor">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 PC Geeks.com — All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
