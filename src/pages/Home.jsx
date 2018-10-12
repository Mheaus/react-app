import React from 'react'

import logoLarge from '../assets/logo-large.png'

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logoLarge} alt="logo large" />
    <div className="header__categories" />
    <div className="header__user-actions" />
  </header>
)

const Main = () => (
  <div className="main">
    <h1 className="main__title">Lorem ipsum dolor sit amet</h1>
    <div className="main__cta-search">
      <input type="text" className="main__cta-search__input" />
      <input type="submit" className="main__cta-search__submit" />
    </div>
    <p className="main__description">
      Praesent mollis, massa in auctor molestie, magna lorem semper mauris, a
      venenatis turpis purus vel metus. Etiam sed iaculis libero, at euismod
      massa. Fusce in venenatis ligula.
    </p>
  </div>
)

const Services = () => (
  <div className="services">
    <div className="services__list">
      <div className="services__list__item" />
      <div className="services__list__item" />
      <div className="services__list__item" />
    </div>
    <div className="services__info">
      <h3 className="services__info__title">Lorem ipsum efficitur sed erat</h3>
      <p className="services__info__description">
        Praesent mollis, massa in auctor molestie, magna lorem semper mauris a
        venenatis turpis. Etiam sed iaculis libero, at euismod massa. Fusce in
        venenatis ligula.
      </p>
      <button className="services__info__cta-button" type="button">
        lorem ipsum
      </button>
    </div>
  </div>
)

const Home = ({ className }) => (
  <div className={`home ${className}`}>
    <Header />
    <Main />
    <Services />
    {/* Contact */}
  </div>
)

export default Home
