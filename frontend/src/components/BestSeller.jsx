import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import { useEffect } from 'react';
import Title from './Title';
import { useContext } from 'react';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const[bestseller,setBestSeller]=useState([]);

    useEffect(()=>{
        if(products && products.length>0){
        const bestProduct=products.filter((item)=>(item.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    }},[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'Best'} text2={'Seller'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quas quasi dignissimos dolores temporibus, eos totam tempore vel dicta repellat alias consectetur cupiditate molestiae nemo, aut et! Corrupti, iusto voluptate.
            </p>  
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestseller.map((item,index) =>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
