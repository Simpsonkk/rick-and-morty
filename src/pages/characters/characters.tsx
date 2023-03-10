import './characters.scss';

import { useNavigate } from 'react-router-dom';

import userAuthIcon from '../../assets/img/user_auth_.svg';
import Header from '../../components/header/header';
import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getCharacters } from '../../store/slices/character/selectors';

function Characters() {
  const navigate = useNavigate();
  const characters = useAppSelector(getCharacters);

  // const characters = [
  //   {
  //     id: 1,
  //     image: 'rick.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //   },
  //   {
  //     id: 2,
  //     image: 'rick.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //   },
  // ];

  return (
    <>
      <Header />
      <main className="main-container">
        <section className="characters">
          <div className="characters__input-container">
            <input className="characters__search" type="text" placeholder="Filter by name..." />
            <img className="characters__icon" src={userAuthIcon} alt="user_icon" />
          </div>
          <ul className="characters__group">
            {characters.map((character) => (
              <li onClick={() => navigate(`${character.id}`)} key={character.id} className="characters__item">
                <img className="characters__img" src={character.image} alt="character" />
                <div className="characters__description">
                  <h4 className="characters__name">{character.name}</h4>
                  <p className="characters__species">{character.species}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Characters;
