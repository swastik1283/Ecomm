import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"My"} text2={"Order"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Product Details */}
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Purchase Date{" "}
                  <span className="text-gray-400">25 July 3222</span>
                </p>
              </div>
            </div>

            {/* Ready to Ship Section */}
            <div className="flex items-center gap-2 md:gap-4">
              <p className="w-3 h-3 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">Ready to Ship</p>
            </div>
            <button className=" border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
