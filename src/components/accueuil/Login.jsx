import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useAlert } from 'react-alert';
import { LoginContext } from '../../context/LoginUserContext';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const alert = useAlert();

  const history = useHistory();

  const { updateLoginStatus, updateUserId } = useContext(LoginContext);

  function connexion() {
    axios
      .post(`http://localhost:8000/api/users/login`, {
        username,
        password,
      })
      .then((res) => {
        if (res.data.acces === true) {
          updateLoginStatus(res.data.acces);
          updateUserId(res.data.result[0].id);
          history.push('/stock');
          alert.show('Vous êtes connecté');
        }
      })
      .catch(() => {
        alert.show('Identifiant ou Mot de passe Invalide');
      });
  }

  return (
    <div className="bg-blue-300 h-screen flex flex-col justify-around items-center font-serif">
      <h1 className="text-7xl bg-gradient-to-r from-pink-400 to-pink-100 p-1 rounded-xl font-serif">
        GeStock
      </h1>
      <h2 className="text-5xl font-serif">Identifiez-vous:</h2>
      <div className="flex flex-col justify-around items-center h-72">
        <input
          type="text"
          className="h-10 w-52 ring-4 ring-pink-200 rounded-md"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="h-10 w-52 ring-4 ring-pink-200 rounded-md"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="ring-4 ring-pink-300 bg-pink-200 rounded-md w-40"
          type="button"
          onClick={connexion}
        >
          Connexion
        </button>
        <Link to="/compte-creation">Créer un compte</Link>
      </div>
    </div>
  );
}

export default Login;
