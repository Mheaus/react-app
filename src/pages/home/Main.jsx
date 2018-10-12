import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = ({ className }) => (
  <div className={`main ${className}`}>
    <h1 className="main__title">Lorem ipsum dolor sit amet</h1>
    <div className="main__cta-search">
      <input
        type="text"
        className="main__cta-search__input"
        placeholder="Bordeaux..."
      />
      <input
        type="submit"
        className="main__cta-search__submit"
        value="rechercher"
      />
    </div>
    <p className="main__description">
      Praesent mollis, massa in auctor molestie, magna lorem semper mauris, a
      venenatis turpis purus vel metus. Etiam sed iaculis libero, at euismod
      massa. Fusce in venenatis ligula.
    </p>
  </div>
)

export default styled(Main)`
  &.main {
    margin: 6rem auto;
    max-width: 36rem;

    .main__title {
      font-size: 4rem;
    }
    .main__cta-search {
      display: flex;

      .main__cta-search__input {
        appearance: none;
        border: solid 1px var(--light-gray);
        border-radius: 0.2rem;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.02),
          0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 2px 2px 0 rgba(0, 0, 0, 0.04);
        display: block;
        font-size: 1rem;
        margin-right: 0.5rem;
        outline: none;
        padding: 0 1rem;
        width: 100%;

        &::placeholder {
          appearance: none;
          display: block;
          font-size: 1rem;
        }
      }

      .main__cta-search__submit {
        appearance: none;
        background: var(--primary);
        border: none;
        border-radius: 0.2rem;
        color: var(--white);
        display: block;
        font-size: 1rem;
        padding: 0.85rem 2.75rem;
        text-transform: capitalize;
      }
    }
    .main__description {
      font-size: 1rem;
      letter-spacing: 1px;
      line-height: 2rem;
      margin: 2rem 0;
    }
  }
`

Main.defaultProps = {
  className: '',
}

Main.propTypes = {
  className: PropTypes.string,
}
