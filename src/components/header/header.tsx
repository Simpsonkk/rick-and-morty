import './header.scss';

import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

import { getToken, removeToken, saveToken } from '../../services/token';
import { User } from '../../types/user.type';

declare const google: any;

function Header() {
  const [user, setUser] = useState<User | null>(null);

  const handleCallbackResponse = (response: any) => {
    let token;
    if (typeof response === 'string') {
      token = response;
    } else {
      token = response.credential;
      saveToken(response.credential);
    }

    const userObject: User = jwt_decode(token);
    setUser(userObject);
    document.getElementById('signInDiv')!.hidden = true;
  };

  const handleSignOut = () => {
    setUser(null);
    removeToken();
    document.getElementById('signInDiv')!.hidden = false;
  };

  useEffect(() => {
    const token = getToken();

    google.accounts.id.initialize({
      client_id: '274566696604-59sfgkts109bnveapmvnk7rbs8sa4kps.apps.googleusercontent.com',
      callback: token ? handleCallbackResponse(token) : handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
      type: 'standard',
    });

    if (!token) {
      google.accounts.id.prompt();
    }
  }, []);

  return (
    <header className="header">
      <img
        className="header__banner"
        src={require('../../assets/img/banner_rick_and_morty.png')}
        alt="rick_and_morty"
      />
      <div id="signInDiv"></div>
      {user && (
        <div className="header__user">
          <button onClick={() => handleSignOut()} className="header__button">
            Sign out
          </button>
          <img src={user.picture} className="header__img" alt="user" />
          <p className="header__name">{user.name}</p>
        </div>
      )}
    </header>
  );
}

export default Header;
