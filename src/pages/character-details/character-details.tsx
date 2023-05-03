import './character-details.scss';

import { useNavigate, useParams } from 'react-router-dom';

import Loader from '../../components/loader';
import { useGetSelectedCharacterQuery } from '../../store/characters-api';

function CharacterDetails() {
  const { characterId } = useParams();
  const navigate = useNavigate();  
  const { data: character, isLoading, error } = useGetSelectedCharacterQuery(characterId!);

  if (isLoading) {
    return <Loader />;
  }

  return error ? (
    <p className="characters__error">Error {'status' in error && error.status}, try another query</p>
  ) : (
    <main className="main-wrapper">
      <section className="navigation">
        <p onClick={() => navigate(-1)} className="navigation__back">
          go back
        </p>
      </section>
      <section className="character">
        <img className="character__img" src={character!.image} alt="character" />
        <h3 className="character__name">{character!.name}</h3>
        <div className="character__info">
          <h6 className="character__title">Informations</h6>
          <p className="character__item">
            <strong className="character__text">Gender</strong>
            <span className="character__value">{character!.gender}</span>
          </p>

          <p className="character__item">
            <strong className="character__text">Status</strong>
            <span className="character__value">{character!.status}</span>
          </p>

          <p className="character__item">
            <strong className="character__text">Species</strong>
            <span className="character__value">{character!.species}</span>
          </p>

          <p className="character__item">
            <strong className="character__text">Origin</strong>
            <span className="character__value">{character!.origin.name}</span>
          </p>

          <p className="character__item">
            <strong className="character__text">Type</strong>
            <span className="character__value">{character!.type || 'Unknown'}</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default CharacterDetails;
