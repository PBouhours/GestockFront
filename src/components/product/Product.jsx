/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Product({ reference, name, size, gender, quantity, id }) {
  return (
    <Link to={`/stock/${id}`}>
      <div className="flex flex-col justify-between items-center bg-gradient-to-r from-blue-300 to-blue-100 m-8 h-44 w-72 ring-4 ring-pink-200 rounded-2xl">
        <h2 className="text-3xl font-serif">{name}</h2>
        <div className=" flex flex-col justify-between text-xl font-serif">
          <h3>ref: {reference}</h3>
          <h3>size: {size}</h3>
          <h3>Sexe: {gender}</h3>
        </div>

        <h3 className="text-2xl font-serif">Quantité: {quantity}</h3>
      </div>
    </Link>
  );
}

export default Product;
