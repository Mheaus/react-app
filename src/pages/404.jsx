import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NoMatch = ({ className }) => (
  <div className={`no-match ${className}`}>
    <h1 className="no-match__error-code">404</h1>
    <p className="no-match__details">Oups, you&apos;re lost.</p>
    <Link to="/" className="no-match__link">
      Go back
    </Link>
    <svg
      className="no-match__wave no-match__wave--background"
      width="100%"
      fill="none"
    >
      <defs>
        <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
          <stop className="stop1" offset="0%" stopColor="rgb(117, 175, 236)" />
          <stop className="stop3" offset="100%" stopColor="rgb(0, 68, 138)" />
        </linearGradient>
      </defs>
      <path
        id="wave"
        fill="url(#Gradient)"
        d="M 0 55.1309 C 289.292 150.285 474.416 96.9043 771.817 46.8753 C 1069.22 -3.15346 1228.31 14.8752 1440 55.1309 V 347.131 H 0 V 55.1309 Z"
      >
        <animate
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="13.5s"
          values="M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z; M0 51.8168C277 169.163 433 131.471 720 51.8168C1007 -27.8372 1199 -5.83717 1440 51.8168V343.817H0V51.8168Z; M0 69.3411C342 69.3411 652 -51.313 994 25.687C1336 102.687 1354 103.687 1440 69.3411V361.341H0V69.3411Z; M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z&nbsp; "
        />
      </path>
    </svg>
    <svg className="no-match__wave" width="100%" fill="none">
      <defs>
        <linearGradient id="Gradient--light" x1="0" x2="0" y1="0" y2="1">
          <stop className="stop1" offset="0%" stopColor="rgb(148, 195, 246)" />
          <stop className="stop3" offset="100%" stopColor="rgb(55, 114, 175)" />
        </linearGradient>
      </defs>
      <path
        id="wave"
        fill="url(#Gradient--light)"
        d="M 0 55.1309 C 289.292 150.285 474.416 96.9043 771.817 46.8753 C 1069.22 -3.15346 1228.31 14.8752 1440 55.1309 V 347.131 H 0 V 55.1309 Z"
      >
        <animate
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="15s"
          values="M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z; M0 51.8168C277 169.163 433 131.471 720 51.8168C1007 -27.8372 1199 -5.83717 1440 51.8168V343.817H0V51.8168Z; M0 69.3411C342 69.3411 652 -51.313 994 25.687C1336 102.687 1354 103.687 1440 69.3411V361.341H0V69.3411Z; M0 95.654C277.431 -69.1705 408 11.654 720 95.654C1032 179.654 1207.5 144.328 1440 95.654V387.654H0V95.654Z&nbsp; "
        />
      </path>
    </svg>
  </div>
)

export default styled(NoMatch)`
  &.no-match {
    margin: 4rem auto;
    max-width: 20rem;
    text-align: center;

    .no-match__error-code {
      font-size: 12rem;
      margin-bottom: 0;
    }
    .no-match__details {
      font-size: 1.25rem;
      color: rgb(126, 126, 126);
    }
    .no-match__link {
      text-decoration: none;
    }
    .no-match__wave {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 35%;

      &.no-match__wave--background {
        height: 40%;
      }
    }
  }
`

NoMatch.defaultProps = {
  className: '',
}

NoMatch.propTypes = {
  className: PropTypes.string,
}
