import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Product from '../models/Product';
const mongoose = require("mongoose");

import { useRouter } from 'next/router'




  const Products = ({ products }) => {
    const router = useRouter();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');
    const [titleFilter, settitleFilter] = useState('');
  
    useEffect(() => {
      setFilteredProducts(products);
    }, [products]);
  
    const handlePriceFilter = (e) => {
      const price = e.target.value;
      setPriceFilter(price);
      filterProducts(price, titleFilter);
    };
  
    const handletitleFilter = (e) => {
      const title = e.target.value;
      settitleFilter(title);
      filterProducts(priceFilter, title);
    };
  
    const filterProducts = (price, title) => {
      let filtered = [...products];
  
      if (price) {
        filtered = filtered.filter(product => product.price <= price);
      }
      if (title) {
        filtered = filtered.filter(product => {
          const productTitle = (product.title || '').toLowerCase();
          const selectedTitle = (title || '').toLowerCase();
          return productTitle.includes(selectedTitle); // Use includes instead of strict equality
        });
      }
  
    
      
  
      setFilteredProducts(filtered);
    };
    
  

     //   const router = useRouter()
  
   //   useEffect(() => {

   //   router.query.category && category == "" ? refreshVariant(router.query.category) : refreshVariant(category)
  
  //   }, [category]);

      //   const refreshVariant = (category) => {
  
      //     let url = `${process.env.NEXT_PUBLIC_HOST}/products?category=${category}`
    //     router.push(url);
     //   }

   return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <input type="number" placeholder="Max Price" value={priceFilter} onChange={handlePriceFilter} className="border px-4 py-2 rounded-lg w-full md:w-auto" />
            <input type="text" placeholder="Enter Title" value={titleFilter} onChange={handletitleFilter} className="border px-4 py-2 rounded-lg w-full md:w-auto" />
          </div>
         


        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center">
            {filteredProducts.length === 0 && <p>Sorry! All The Products are Currently Out Of Stock!! New stock Coming soon. Stay Tuned!</p>}
            {filteredProducts.map((product) => (
              <div key={product._id} className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                <Link passHref={true} href={`/product/${product.slug}`}>
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto h-[36vh] block" src={product.img} />
                  </a>
                </Link>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <p className="mt-1">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>



    
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


export default Products
