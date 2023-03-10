import './character-details.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { characterDescription } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSelectedCharacter } from '../../store/actions/api-actions';
import { getSelectedCharacter } from '../../store/slices/character/selectors';

function CharacterDetails() {
  const { characterId } = useParams();
  const dispatch = useAppDispatch()
  const character = useAppSelector(getSelectedCharacter)
  console.log(character);

  useEffect(() => {
    dispatch(fetchSelectedCharacter(characterId))
  }, [characterId])
  

  return (
    <main className="main-container">
      <section className="navigation">
        <p className="navigation__back">go back</p>
      </section>
      <section className="character">
        <img className="character__img" src={character?.image} alt="character" />
        <h3 className="character__name">{character?.name}</h3>
        <div className="character__info">
          {/* {characterDescription.map((description) => ( */}
            <p className="character__item">
              <strong className="character__text">Gender</strong>
              <span className="character__value">{character?.gender}</span>
            </p>

            <p className="character__item">
              <strong className="character__text">Status</strong>
              <span className="character__value">{character?.status}</span>
            </p>

            <p className="character__item">
              <strong className="character__text">Species</strong>
              <span className="character__value">{character?.species}</span>
            </p>

            <p className="character__item">
              <strong className="character__text">Origin</strong>
              <span className="character__value">{character?.origin.name}</span>
            </p>

            <p className="character__item">
              <strong className="character__text">Type</strong>
              <span className="character__value">{character?.type || 'Unknown'}</span>
            </p>
          {/* ))} */}
        </div>
      </section>
    </main>
  );
}

export default CharacterDetails;
