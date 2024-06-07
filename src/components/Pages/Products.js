import React from 'react'
import img from "../../Image/product.jpg"
import "./Product.css"
import Product from '../ProductComponent/Product'
const Products = () => {
  return (
    <>
       <section className='header'>
      <img src={img} alt='product'/>
      <div className='product-content'>
        <h1>Product </h1>
      </div>
    </section>
    <section>
      <Product/>
    </section>
    </>
  )
}

export default Products