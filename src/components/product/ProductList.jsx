/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../../context/LoginUserContext';
import Product from './Product';
import MainLayout from '../layout/MainLayout';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchSize, setSearchSize] = useState('ALL');
  const [searchGender, setSearchGender] = useState('ALL');

  const { userId } = useContext(LoginContext);

  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/products/`, {
        userId,
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [userId]);

  return (
    <MainLayout>
      <div className="flex flex-col items-center pt-4 bg-blue-100">
        <h1 className="text-5xl m-2 font-serif">Votre Stock:</h1>
        <h2 className="text-3xl m-2 font-serif">filtrer par: </h2>
        <form className=" flex justify-between m-2 ">
          <div className="flex m-2">
            <label className="font-serif">Taille: </label>
            <select
              className="ring-4 ring-pink-100 bg-white rounded-md"
              id="size"
              onChange={(e) => setSearchSize(e.target.value)}
            >
              <option value="ALL">ALL</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="flex m-2">
            <label className="font-serif">Sexe: </label>
            <select
              className="ring-4 ring-pink-100 bg-white rounded-md"
              onChange={(e) => setSearchGender(e.target.value)}
            >
              <option value="ALL">ALL</option>
              <option value="M">Homme</option>
              <option value="F">Femme</option>
              <option value="U">Unisexe</option>
            </select>
          </div>
        </form>
        <div className="flex flex-col items-center bg-blue-100 h-full">
          {searchSize !== 'ALL' && searchGender !== 'ALL'
            ? products
                .filter(
                  (el) => el.size === searchSize && el.gender === searchGender
                )
                .map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    reference={product.reference}
                    name={product.name}
                    size={product.size}
                    gender={product.gender}
                    quantity={product.quantity}
                  />
                ))
            : searchSize !== 'ALL' && searchGender === 'ALL'
            ? products
                .filter((el) => el.size === searchSize)
                .map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    reference={product.reference}
                    name={product.name}
                    size={product.size}
                    gender={product.gender}
                    quantity={product.quantity}
                  />
                ))
            : searchGender !== 'ALL' && searchSize === 'ALL'
            ? products
                .filter((el) => el.gender === searchGender)
                .map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    reference={product.reference}
                    name={product.name}
                    size={product.size}
                    gender={product.gender}
                    quantity={product.quantity}
                  />
                ))
            : products.map((product) => (
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
      </div>
    </MainLayout>
  );
}

export default ProductList;
