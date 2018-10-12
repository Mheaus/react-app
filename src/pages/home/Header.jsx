import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logoLarge from '../../assets/logo-large.png'

const Header = ({ className }) => (
  <header className={`header ${className}`}>
    <img className="header__logo" src={logoLarge} alt="logo large" />
    <div className="header__categories" />
    <div className="header__user-actions">
      <span className="header__user-actions__log-in">connection</span>
      <strong className="header__user-actions__option">ou</strong>
      <span className="header__user-actions__sign-in">créer un compte</span>
    </div>
  </header>
)

export default styled(Header)`
  &.header {
    align-items: center;
    border-bottom: solid 1px var(--light-gray);
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    .header__logo {
      height: 2.5rem;
    }
    .header__categories {
    }
    .header__user-actions {
      font-size: 0.85rem;
      text-transform: uppercase;

      span {
        font-weight: 600;
      }

      strong {
        color: gray;
        margin: 0 0.5rem;
      }
    }
  }
`

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: PropTypes.string,
}
