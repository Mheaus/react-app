import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ServicesListItem = ({ className, icon, title, description }) => (
  <div className={`service-list-item ${className}`}>
    <div className="service-list-item__icon-container">{icon}</div>
    <div className="service-list-item__info">
      <h5 className="service-list-item__info__title">{title}</h5>
      <p className="service-list-item__info__description">{description}</p>
    </div>
  </div>
)

const StyledServicesListItem = styled(ServicesListItem).attrs({
  iconPosition: ({ iconPosition }) => iconPosition || 'left',
})`
  &.service-list-item {
    align-items: center;
    display: flex;
    flex-direction: ${({ iconPosition }) =>
      iconPosition === 'left' ? 'row' : 'row-reverse'};

    .service-list-item__icon-container {
      background: blue;
      height: 100%;
      margin-${({ iconPosition }) =>
        iconPosition === 'left' ? 'right' : 'left'}: 1rem;
      width: 4rem;

      & > * {
        height: 100%;
        width: 4rem;
      }
    }
    .service-list-item__info {
      ${({ iconPosition }) =>
        iconPosition === 'left'
          ? 'padding: 0 7rem 0 0'
          : 'padding: 0 0 0 7rem'};

      .service-list-item__info__title {
        font-size: 1.25rem;
        margin: 0.5rem 0;
      }
      .service-list-item__info__description {
      }
    }
  }
`

ServicesListItem.defaultProps = {
  className: '',
  description: '',
  icon: <img alt="" />,
  iconPosition: 'left',
  title: '',
}

ServicesListItem.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']), // eslint-disable-line react/no-unused-prop-types
  title: PropTypes.string,
}

const Services = ({ className }) => (
  <div className={`services ${className}`}>
    <div className="container">
      <div className="services__list">
        <StyledServicesListItem
          title="Lorem ipsum dolor"
          description="Praesent mollis, massa in auctor molestie"
        />
        <StyledServicesListItem
          title="Lorem ipsum dolor"
          description="Praesent mollis, massa in auctor molestie"
          iconPosition="right"
        />
        <StyledServicesListItem
          title="Lorem ipsum dolor"
          description="Praesent mollis, massa in auctor molestie"
        />
      </div>
      <div className="services__info">
        <h3 className="services__info__title">
          Lorem ipsum efficitur sed erat
        </h3>
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
  </div>
)

export default styled(Services)`
  &.services {
    background: var(--white);

    .container {
      display: flex;
      justify-content: space-between;
      max-width: 52rem;
      margin: 0 auto;
      padding: 4rem 0;

      .services__list {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin: 0 0.5rem;
        width: 70%;

        .services__list__item {
          display: flex;
        }
      }

      .services__info {
        margin: 0 0.5rem;
        width: 30%;

        .services__info__title {
          font-size: 2rem;
          margin: 0 0 1rem;
        }
        .services__info__description {
          letter-spacing: 1px;
          line-height: 2rem;
        }
        .services__info__cta-button {
        }
      }
    }
  }
`

Services.defaultProps = {
  className: '',
}

Services.propTypes = {
  className: PropTypes.string,
}
