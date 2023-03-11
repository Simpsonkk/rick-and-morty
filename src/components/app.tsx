import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import { AppRoute } from '../consts';
import CharacterDetails from '../pages/character-details/character-details';
import Characters from '../pages/characters/characters';

function App() {
  //DO: delete namespace and root-reducer
  //DO: create not found page
  //DO: google auth

  return (
    <Routes>
      <Route path={AppRoute.Characters} element={<Characters />} />
      <Route path={AppRoute.CharacterDetails} element={<CharacterDetails />} />
      {/* <Route path={AppRoute.NotFound} element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
