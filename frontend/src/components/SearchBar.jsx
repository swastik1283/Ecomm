import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, showSearch, setSearch, setShowSearch } = useContext(ShopContext);
  const[visible,setVisible]=useState(false)
  const location=useLocation();
  useEffect(()=>{
    if(location.pathname.includes('collection')&&showSearch){
     setVisible(true)
    }
    else{
        setVisible(false)
    }
  }, [location.pathname,showSearch,setShowSearch])
  // Debugging log to ensure context values are available
 

  return  showSearch&& visible ?(
    <div className="border-t border-b bg-gray-50 text-center">
      {showSearch ? (
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-inherit text-sm"
            type="text"
            placeholder="Search"
          />
          <img
            onClick={() => setShowSearch(false)} // Close the search bar on click
            className="inline w-5 h-5 cursor-pointer ml-2"
            src={assets.cross_icon} // Use a "close" icon
            alt="Close"
          />
        </div>
      ) : (
        <img
          onClick={() => setShowSearch(true)} // Open the search bar on click
         
        />
      )}
    </div>
  ):null;
};

export default SearchBar;
