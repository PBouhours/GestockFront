/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../../context/LoginUserContext';
import MainLayout from '../layout/MainLayout';

function ProductDetails(props) {
  const [changeName, setChangeName] = useState('');
  const [changeRef, setChangeRef] = useState('');
  const [changeSize, setChangeSize] = useState('');
  const [changeGender, setChangeGender] = useState('');
  const [changeQuanti, setChangeQuanti] = useState();

  const alert = useAlert();

  const { userId } = useContext(LoginContext);

  const history = useHistory();

  const { id } = props.match.params;

  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/products/${id}`, {
        userId,
      })
      .then((res) => {
        const temp = res.data;
        setChangeName(temp.name);
        setChangeRef(temp.reference);
        setChangeSize(temp.size);
        setChangeGender(temp.gender);
        setChangeQuanti(temp.quantity);
      });
  }, [id]);

  function updateProduct() {
    const accepted = window.confirm(
      'Vous êtes sur de vouloir modifier ce produit de votre stock?'
    );
    if (accepted) {
      axios
        .put(`http://localhost:8000/api/products/${id}`, {
          reference: changeRef,
          name: changeName,
          size: changeSize,
          gender: changeGender,
          quantity: changeQuanti,
          id,
          userId,
        })
        .then(() => {
          alert.show('Produit modifié');
        });
    }
  }

  function deleteProduct() {
    const accepted = window.confirm(
      'Vous êtes sur de vouloir supprimer ce produit de votre stock?'
    );
    if (accepted) {
      axios.delete(`http://localhost:8000/api/products/${id}`).then(() => {
        alert.show('Produit supprimé');
        history.push('/stock');
      });
    }
  }

  return (
    <MainLayout>
      <div className="flex flex-col items-center pt-6 bg-blue-100 h-screen font-serif">
        <h1 className="text-5xl mb-4">Votre produit</h1>
        <div className="flex flex-col justify-around items-center bg-gradient-to-r from-blue-300 to-blue-100 w-72 h-96 mt-8 ring-4 ring-pink-200 rounded-2xl">
          <input
            type="text"
            className="ring-4 ring-pink-100 rounded-md"
            value={changeName}
            onChange={(e) => setChangeName(e.target.value)}
          />
          <input
            type="text"
            className="ring-4 ring-pink-100 rounded-md"
            value={changeRef}
            onChange={(e) => setChangeRef(e.target.value)}
          />
          <div className="flex w-36 justify-between">
            <label>Taille:</label>
            <select
              className="ring-4 ring-pink-100 rounded-md"
              value={changeSize}
              onChange={(e) => setChangeSize(e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="flex w-36 justify-between">
            <label>Sexe:</label>
            <select
              className="ring-4 ring-pink-100 rounded-md"
              value={changeGender}
              onChange={(e) => setChangeGender(e.target.value)}
            >
              <option value="M">Homme</option>
              <option value="F">Femme</option>
              <option value="U">Unisexe</option>
            </select>
          </div>
          <input
            type="number"
            className="ring-4 ring-pink-100 rounded-md"
            value={changeQuanti}
            onChange={(e) => setChangeQuanti(e.target.value)}
          />
          <button
            type="button"
            className="ring-4 ring-pink-300 bg-pink-200 rounded-md w-20"
            onClick={updateProduct}
          >
            modifier
          </button>
          <button
            type="button"
            className="ring-4 ring-pink-300 bg-pink-200 rounded-md w-20"
            onClick={deleteProduct}
          >
            supprimer
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductDetails;
