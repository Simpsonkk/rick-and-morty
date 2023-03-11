import './characters.scss';

import CharacterList from '../../components/character-list/character-list';
import CharactersSearchForm from '../../components/characters-search-form/characters-search-form';
import Header from '../../components/header/header';

function Characters() {
  return (
    <>
      <Header />
      <main className="main-container">
        <section className="characters">
          <CharactersSearchForm />
          <CharacterList />
        </section>
      </main>
    </>
  );
}

export default Characters;
