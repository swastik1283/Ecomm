import { ShopContext } from '../context/ShopContext';
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      if (category) {
        productsCopy = productsCopy.filter((item) => item.category === category);
      }

      if (subCategory) {
        productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);
      }

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="Related" text2="Products" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};
RelatedProducts.propTypes = {
  category: PropTypes.string,
  subCategory: PropTypes.string,
};

export default RelatedProducts;
