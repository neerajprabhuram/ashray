import React from 'react'
import {
  Navbar,
  Header,
  Components,
  Features,
  Connectivity,
  Contact,
} from './containers'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Components />
      <Features />
      <Connectivity />
      <Contact />
    </React.Fragment>
  )
}

export default App
