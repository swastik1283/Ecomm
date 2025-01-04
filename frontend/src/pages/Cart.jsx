import { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); // State for total cart price

  useEffect(() => {
    const tempData = [];
    let total = 0; // Variable to accumulate the cart total

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find((product) => product._id === itemId);
          if (product) {
            const itemTotal = product.price * cartItems[itemId][size];
            total += itemTotal; // Add to total

            tempData.push({
              _id: itemId,
              size: size,
              quantity: cartItems[itemId][size],
              itemTotal, // Include item total for easier display
            });
          }
        }
      }
    }

    setCartData(tempData);
    setCartTotal(total); // Update the total
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Your" text2="Cart" />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          // Ensure productData exists
          if (!productData) {
            return (
              <div key={index} className="text-red-500">
                Product not found for ID: {item._id}
              </div>
            );
          }

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {currency}
                    {productData.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base font-medium">
                {currency}
                {item.itemTotal}
              </p>
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>

      {/* Cart Total Section */}
      <div className="mt-10">
        <div className="text-2xl mb-3">
          <Title text1="Cart" text2="Total" />
        </div>
        <div className="text-gray-800">
          <p className="text-lg font-medium">
            Subtotal: <span className="font-semibold">{currency}{cartTotal}</span>
          </p>
          <p className="text-lg font-medium">
            Delivery_Fee:
            <span className='font-semibold'>
             {cartTotal === 0 ? `${currency}0` : `${currency}10.00`}
            </span>
            </p>
          <p className="text-xl font-semibold mt-2">
            Total: <span className="text-green-600">{currency}{cartTotal + (cartTotal===0?0:10.00)}</span>
          </p>
         
        </div>
        <div className='w-full text-end'>
          <button onClick={()=>navigate('/place-order')}className='bg-black text-white text-sm my-8 px-8 py-3'>Proceed to check out</button>
      </div>
      
          
        </div>
      </div>
    
  );
};

export default Cart;
