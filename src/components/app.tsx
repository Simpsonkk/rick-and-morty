import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import { AppRoute } from '../consts';
import CharacterDetails from '../pages/character-details/character-details';
import Characters from '../pages/characters/characters';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Characters} element={<Characters />} />
      <Route path={AppRoute.CharacterDetails} element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;
