import React from 'react'
import ReactDOM from 'react-dom'

import { Layout } from '../components'

const App = () => (
  <Layout className="App">
    <p>content</p>
  </Layout>
)

ReactDOM.render(<App />, document.getElementById('root'))
