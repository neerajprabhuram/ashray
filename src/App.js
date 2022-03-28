import React from 'react'
import {
  Navbar,
  Header,
  Components,
  About,
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
      <About />
      <Features />
      <Connectivity />
      <Contact />
    </React.Fragment>
  )
}

export default App
