/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState, useContext } from 'react';
import { useAlert } from 'react-alert';
import { LoginContext } from '../../context/LoginUserContext';
import MainLayout from '../layout/MainLayout';

function ProductCreate() {
  const [changeName, setChangeName] = useState('');
  const [changeRef, setChangeRef] = useState('');
  const [changeSize, setChangeSize] = useState('');
  const [changeGender, setChangeGender] = useState('');
  const [changeQuanti, setChangeQuanti] = useState();

  const alert = useAlert();

  const { userId } = useContext(LoginContext);

  function createProduct() {
    const accepted = window.confirm(
      "Ce nouveau produit va être ajouté a votre stock. Voulez vous vraiment l'ajouter?"
    );
    if (accepted) {
      axios
        .post('http://localhost:8000/api/products/create', {
          reference: changeRef,
          name: changeName,
          size: changeSize,
          gender: changeGender,
          quantity: changeQuanti,
          userId,
        })
        .then(() => {
          alert.show('Ce produit a bien été ajouté a votre Stock');
        })
        .catch(() => {
          alert.show('la référence de ce produit existe déjà.');
        });
    }
  }

  return (
    <MainLayout>
      <div className="flex flex-col items-center font-serif bg-blue-100 h-screen">
        <h1 className="text-4xl mt-8 mb-8">Ajoutez un produit</h1>
        <div className="flex flex-col justify-around items-center bg-gradient-to-r from-blue-300 to-blue-100 w-72 h-96 mt-8 ring-4 ring-pink-200 rounded-2xl">
          <input
            type="text"
            className="ring-4 ring-pink-100 rounded-md"
            placeholder="Nom"
            onChange={(e) => setChangeName(e.target.value)}
          />
          <input
            type="text"
            className="ring-4 ring-pink-100 rounded-md"
            placeholder="Reference"
            onChange={(e) => setChangeRef(e.target.value)}
          />
          <div className="flex w-36 justify-between">
            <label>Taille:</label>
            <select
              className="ring-4 ring-pink-100 rounded-md"
              onChange={(e) => setChangeSize(e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="flex w-36 justify-between">
            <label>Sexe: </label>
            <select
              className="ring-4 ring-pink-100 rounded-md"
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
            placeholder="Quantité"
            onChange={(e) => setChangeQuanti(e.target.value)}
          />
          <button
            type="button"
            className="ring-4 ring-pink-300 bg-pink-200 rounded-md w-20"
            onClick={createProduct}
          >
            Ajoutez
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductCreate;
