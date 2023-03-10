import './header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="header__banner"
        src={require('../../assets/img/banner_rick_and_morty.png')}
        alt="rick_and_morty"
      />
    </header>
  );
}

export default Header;
