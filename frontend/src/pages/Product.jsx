import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const params = useParams(); // Get the entire params object
  const { productId } = params; // Destructure productId from params
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState();
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  useEffect(() => {
    console.log("useParams:", params); // Log the params object
    if (!productId) {
      console.log("productId is missing or undefined");
      return; // Early return if productId is not available
    }

    const fetchProductData = () => {
      console.log("productId:", productId); // Log productId to check its value
      console.log("products:", products); // Log the products array

      const product = products.find((item) => item._id === productId); // Use string comparison

      if (product) {
        setProductData(product);
        setImage(product.image[0]); // Set the first image as the default
        // console.log("Found product:", product);
      } else {
        console.log("Product not found");
      }
    };

    fetchProductData();
  }, [params, productId, products]);

  return (
    <div>
      {productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/* Product Data */}
          <div className='flex gap-12 sm:gap-12 flex-col sm-flex-row'>
            {/* Images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {productData.image.map((item, index) => (
                  <img
                    src={item}
                    key={index}
                    className='w-[24%] sm:w-full sm-mb-3 flex-shrink-0 cursor-pointer'
                    alt=""
                    onClick={() => setImage(item)} // Set the clicked image as the main image
                  />
                ))}
              </div>


              <div className='w-[70%] sm:w-[50%]'>
                <img className='w-full h-auto' src={image} alt="" />
              </div>


              <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" /><img src="" alt="" className="w-3 5" /><img src="" alt="" className="w-3 5" />
                  <p className='pl-2'>(122)</p>
                </div>
                <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                    {productData.sizes.map((item, index) => (
                      <button onClick={() => setSize(item)} className={`border py-2px-4 bg-gray-100 ${item == size ? 'border-orange-500' : ""}`} key={index}>{item} </button>

                    ))}

                  </div>
                </div>
                <div>
                  <button onClick ={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                  <hr className='mt-8 sm:w-4/5'></hr>
                  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% original product</p>
                    <p>CAsh on Delievery Available </p>
                    <p>Easy return and exchange within 7 days</p>

                  </div>
                </div>
              </div>
              {/*.....................................................description...........................*/}


            </div>
          </div>
          <div className='mt-20'>
            <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p> a great buy for the user </p>
              <p> best in the world  </p>
            </div>
          </div>



          {/*Display related products */}
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
