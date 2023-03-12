import { useEffect } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import { AppRoute } from '../consts';
import CharacterDetails from '../pages/character-details/character-details';
import Characters from '../pages/characters/characters';

declare const google: any;

function App() {

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '274566696604-59sfgkts109bnveapmvnk7rbs8sa4kps.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      
    )
  }, [])
  

  return (
    <Routes>
      <Route path={AppRoute.Characters} element={<Characters />} />
      <Route path={AppRoute.CharacterDetails} element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;
