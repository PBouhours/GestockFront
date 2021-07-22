/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/LoginUserContext';
import Product from './Product';
import MainLayout from '../layout/MainLayout';

function ProductSearch(props) {
  const [products, setProducts] = useState([]);
  const { query } = props.match.params;
  const { userId } = useContext(LoginContext);

  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/products/search/${query}`, {
        userId,
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [query]);
  return (
    <MainLayout>
      <div className="flex flex-col items-center pt-4 bg-blue-100">
        <h1 className="text-5xl">Votre Recherche</h1>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            reference={product.reference}
            name={product.name}
            size={product.size}
            gender={product.gender}
            quantity={product.quantity}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default ProductSearch;
