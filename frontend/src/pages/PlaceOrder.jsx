import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
const PlaceOrder = () => {
  const { cartItems, currency, products } = useContext(ShopContext);
  const navigate = useNavigate()
const[method,setMethod]=useState('cod');
  // Calculate cart total
  const cartTotal = Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
    const product = products.find((prod) => prod._id === itemId);
    if (!product) return total;

    const itemTotal = Object.values(sizes).reduce(
      (subtotal, quantity) => subtotal + quantity * product.price,
      0
    );
    return total + itemTotal;
  }, 0);

  const deliveryFee = cartTotal > 0 ? 10.0 : 0;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl gap-2 sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="ZipCode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone Number"
        />
      </div>

      {/* Right Side - Cart Total Section   - same as cart.jsx*/}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <div className="mt-10">
            <div className="text-2xl mb-3">
              <Title text1="Cart" text2="Total" />
            </div>
            <div className="text-gray-800">
              <p className="text-lg font-medium">
                Subtotal: <span className="font-semibold">{currency}{cartTotal.toFixed(2)}</span>
              </p>
              <p className="text-lg font-medium">
                Delivery Fee:{" "}
                <span className="font-semibold">
                  {currency}{deliveryFee.toFixed(2)}
                </span>
              </p>
              <p className="text-xl font-semibold mt-2">
                Total:{" "}
                <span className="text-green-600">
                  {currency}{(cartTotal + deliveryFee).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </div>



        {/* Payment */}
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment method selection */}
          {/* Payment Method Selection */}
<div className="flex gap-3 flex-col lg:flex-row">
  {/* Stripe */}
  <div
    onClick={() => setMethod('stripe')}
    className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
      method === 'stripe' ? 'border-green-400' : ''
    }`}
  >
    <div
      className={`w-4 h-4 border rounded-full ${
        method === 'stripe' ? 'bg-green-400' : ''
      }`}
    ></div>
    <img className="h-5" src={assets.stripe_logo} alt="Stripe" />
  </div>

  {/* Razorpay */}
  <div
    onClick={() => setMethod('razorpay')}
    className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
      method === 'razorpay' ? 'border-green-400' : ''
    }`}
  >
    <div
      className={`w-4 h-4 border rounded-full ${
        method === 'razorpay' ? 'bg-green-400' : ''
      }`}
    ></div>
    <img className="h-5" src={assets.razorpay_logo} alt="Razorpay" />
  </div>

  {/* Cash on Delivery */}
  <div
    onClick={() => setMethod('cod')}
    className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
      method === 'cod' ? 'border-green-400' : ''
    }`}
  >
    
    <p className="text-gray-500 text-sm font-medium">CASH ON DELIVERY</p>
  </div>
</div>
<div className="w-full text-end mt-8">
  <button onClick={()=>navigate('/orders')}className="bg-black text-white px-16 py-3 text:sm">Place Order</button>
</div>

        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
