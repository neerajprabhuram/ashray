import React from 'react'
import {
  Navbar,
  Header,
  Components,
  About,
  Features,
  Connectivity,
  Contact,
  Footer
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
      <Footer />
    </React.Fragment>
  )
}

export default App
