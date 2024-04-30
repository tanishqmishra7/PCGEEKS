import React, { useState, useEffect } from 'react';
import Product from '../models/Product';
import { useRouter } from 'next/router';

const mongoose = require("mongoose");

const PCBuild = ({ products, addToCart }) => {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract unique categories from products
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    // Calculate total price whenever selectedProducts or products change
    handleCalculateTotalPrice();
  }, [selectedProducts, products]);

  const handleProductSelection = (categoryId, productId) => {
    setSelectedProducts(prevState => ({
      ...prevState,
      [categoryId]: productId,
    }));
  };

  const calculateTotalPrice = (selectedProducts, products) => {
    let totalPrice = 0;
    console.log(selectedProducts)
    for (const category in selectedProducts) {
      
      const productId = selectedProducts[category];
      const product = products.find(prod => prod.id === productId);
      if (product) {
        totalPrice += product.price;
      }
    }
    return totalPrice;
  };
  
  const handleCalculateTotalPrice = () => {
    const price = calculateTotalPrice(selectedProducts, products);
    setTotalPrice(price);
  };
  const handleAddToCart = () => {
    for (const category in selectedProducts) {
      console.log(selectedProducts)
      // const { slug } = router.query
      const productId = selectedProducts[category];
      const product = products.find(prod => prod.id === productId);
      // console.log(product.title);
      console.log(product);
      addToCart( product.id,1, product.price, product.title);
    }
    // console.log('Selected products:', selectedProducts);
    setSelectedProducts({});
    setTotalPrice(0);
  };

  // const handleAddToCart = () => {
  //     if (selectedProducts) addToCart(selectedProducts);

  //   console.log('Selected products:', selectedProducts);

  //   setSelectedProducts({});
  //   setTotalPrice(0);
  // };

  return (
    <div className='px-10 py-5 justify-center align-middle items-center'>
      <h1 className="text-2xl font-bold mb-4 text-center">PC Customization Page</h1>
      <div className='justify-center align-middle items-center flex'>

      </div>
      {/* <mdi-monitor className='text-xl md:text-3xl mx-2 text-black' /> */}
      {/* <span class="mdi mdi-monitor text-black"></span> */}
      <div className='flex flex-wrap justify-center '>
      {categories.map(category => (
        <div key={category} className="mb-4 mx-5">
          <h2 className="text-lg font-semibold mb-2">{category}</h2>
          <select
            value={selectedProducts[category] || ''}
            onChange={e => handleProductSelection(category, e.target.value)}
            className="border px-3 py-2 rounded-lg w-96"
          >
            <option value="">Select {category}</option>
            {products
              .filter(product => product.category === category)
              .map(product => (
                <option key={product.id} value={product.id}>{product.title}</option>
              ))
            }
          </select>
        </div>
      ))}
      </div>
      {totalPrice > 0 && <p className="mt-4 text-center">Total Price: ₹{totalPrice}</p>}
      <div className='flex justify-center'>
      <button onClick={handleAddToCart} className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 flex justify-between">Add to Cart</button>
      </div>

    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let allproducts = await Product.find({});
  return {
    props: { products: JSON.parse(JSON.stringify(allproducts)) }
  }
}

export default PCBuild;