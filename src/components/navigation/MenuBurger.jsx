/* eslint-disable react/prop-types */
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { useAlert } from 'react-alert';
import { LoginContext } from '../../context/LoginUserContext';

function MenuBurger({ statusBurger, toggleBurger }) {
  const { updateLoginStatus, updateUserId } = useContext(LoginContext);

  const alert = useAlert();

  const history = useHistory();

  function disconnect() {
    updateLoginStatus(false);
    updateUserId('');
    history.push('/');
    alert.show('Vous êtes déconnecté');
  }

  return (
    <div
      className={`${
        statusBurger ? '' : 'hidden'
      } bg-blue-300 ring-4 ring-pink-200 h-screen items-center font-serif`}
    >
      <nav>
        <ul className="flex flex-col items-center h-screen justify-center">
          <li className="mt-2 mb-4 ring-4 ring-pink-300 bg-pink-200 rounded-md w-44 text-center">
            <Link className="text-2xl" to="/stock" onClick={toggleBurger}>
              Vos Produits
            </Link>
          </li>
          <li className="mt-2 mb-4 ring-4 ring-pink-300 bg-pink-200 rounded-md w-44 text-center">
            <Link
              className="text-2xl"
              to="/creation-produit"
              onClick={toggleBurger}
            >
              Ajoutez Produit
            </Link>
          </li>
          <li className="mt-2 mb-4 ">
            <button
              className="text-2xl ring-4 ring-pink-300 bg-pink-200 rounded-md w-44"
              type="button"
              onClick={disconnect}
            >
              Déconnexion
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;
