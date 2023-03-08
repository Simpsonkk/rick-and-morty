function Characters() {
  return (
    <>
      <header className="header">
        <img className="header__banner" src="" alt="rick_and_morty" />
        <img className="header__icon" src="" alt="user" />
      </header>
      <main className="main-container">
        <section className="characters">
          <input className="characters__search" type="text" />
          <ul className="characters__group">
            <li className="characters__item">
              <img src="" alt="character" />
              <h4 className="characters__name"></h4>
              <p className="characters__species"></p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Characters;
