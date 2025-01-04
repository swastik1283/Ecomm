import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";
import { useCallback } from "react";

const Collection = () => {
  const { products,search ,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Apply Filters and Sorting
  const applyFilter = useCallback((updatedCategory = category, updatedSubcategory = subcategory) => {
    let productCopy = [...products];
    if(showSearch&&search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (updatedCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        updatedCategory.includes(item.category)
      );
    }

    if (updatedSubcategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        updatedSubcategory.includes(item.subcategory)
      );
    }

    // Sort products after applying filters
    switch (sortType) {
      case "low-high":
        productCopy = productCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        productCopy = productCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProduct(productCopy);
    console.log("Filtered Products:", productCopy);
  }, [category, subcategory, products, showSearch, search, sortType]);

  // Toggle Category Selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) => {
      const updatedCategory = prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];

      applyFilter(updatedCategory, subcategory); // Apply filter with updated category
      return updatedCategory;
    });
  };

  // Toggle Subcategory Selection
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubcategory((prev) => {
      const updatedSubcategory = prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];

      applyFilter(category, updatedSubcategory); // Apply filter with updated subcategory
      return updatedSubcategory;
    });
  };

  // Reset filter when no category or subcategory is selected
  useEffect(() => {
    if (category.length === 0 && subcategory.length === 0) {
      setFilterProduct(products);
    }
  }, [category, subcategory, products]);

  // Trigger sorting whenever sortType changes
  useEffect(() => {
    applyFilter(category, subcategory); // Reapply filters and sort when sortType changes
  }, [sortType, category, subcategory,search,showSearch, applyFilter]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-[15rem] bg-gray-100 p-4">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <p key={cat} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                />
                {cat.toUpperCase()}
              </p>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "BottomWear", "WinterWear"].map((subcat) => (
              <p key={subcat} className="flex gap-2">
                <input
                  id={`subcategory-${subcat}`} // Unique id added
                  name="subcategory"          // Name attribute added
                  className="w-3"
                  type="checkbox"
                  value={subcat}
                  onChange={toggleSubCategory}
                />
                <label htmlFor={`subcategory-${subcat}`}>{subcat}</label> {/* Associated label */}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col sm:flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Collections"} />
        </div>

        {/* Product Sort */}
        <div className="flex justify-end mb-4">
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;