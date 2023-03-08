import { characterDescription } from '../../consts';

function CharacterDetails() {
  return (
    <main className="main-container">
      <section className="navigation">
        <p className="navigation__back"></p>
      </section>
      <section className="character">
        <img className="character__img" src="" alt="character" />
        <h3 className="character__title"></h3>
        <div className="character__info">
          {characterDescription.map((description) => (
            <p className="character__item">
              <strong className="character__text">{description}</strong>
              <span className="character__value"></span>
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CharacterDetails;
