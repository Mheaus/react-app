import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Main from './Main'
import Services from './Services'

const Home = ({ className }) => (
  <div className={`home ${className}`}>
    <Header />
    <Main />
    <Services />
    {/* Contact */}
  </div>
)

Home.defaultProps = {
  className: '',
}

Home.propTypes = {
  className: PropTypes.string,
}

export default Home
