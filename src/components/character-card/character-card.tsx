import './character-card.scss';

import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../consts';
import { CharacterDescription } from '../../types/character.type';

type CharacterCardProps = {
  character: CharacterDescription;
};

function CharacterCard({ character }: CharacterCardProps) {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`${AppRoute.Characters}/${character.id}`)} className="characters__item">
      <img className="characters__img" src={character.image} alt="character" />
      <div className="characters__description">
        <h4 className="characters__name">
          {character.name.length < 17 ? character.name : character.name.slice(0, 17) + '...'}
        </h4>
        <p className="characters__species">{character.species}</p>
      </div>
    </li>
  );
}

export default CharacterCard;
