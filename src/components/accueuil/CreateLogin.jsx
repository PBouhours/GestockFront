import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAlert } from 'react-alert';

function CreateLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const alert = useAlert();

  const history = useHistory();

  function createUser() {
    axios
      .post('http://localhost:8000/api/users/create', {
        username,
        password,
      })
      .then(() => {
        alert.show("Votre compte viens d'être créé");
        history.push('/');
      })
      .catch(() => {
        alert.show(
          'Compte déjà existant. Veuillez choisir un autre identifiant'
        );
      });
  }

  return (
    <div className="bg-blue-300 h-screen flex flex-col justify-around items-center font-serif">
      <h1 className="text-7xl bg-gradient-to-r from-pink-400 to-pink-100 p-1 rounded-xl font-serif">
        GeStock
      </h1>
      <h2 className="text-4xl font-serif">Créez votre compte:</h2>
      <div className="flex flex-col justify-around items-center h-72">
        <input
          type="text"
          className="h-10 w-52 ring-4 ring-pink-200 rounded-md"
          placeholder="Identifiant"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="h-10 w-52 ring-4 ring-pink-200 rounded-md"
          placeholder="Mot de Passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="ring-4 ring-pink-300 bg-pink-200 rounded-md w-40"
          type="button"
          onClick={createUser}
        >
          Créer
        </button>
        <Link to="/">Retour</Link>
      </div>
      <p>©2021 Paul Bouhours, tous droits réservés.</p>
    </div>
  );
}

export default CreateLogin;
