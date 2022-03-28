import { Fragment, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import logo from '../assets/logo.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const NavLinks = () => (
    <Fragment>
      <NavItem href="#home" title="Home" />
      <NavItem href="#components" title="Components" />
      <NavItem href="#features" title="Features" />
      <NavItem href="#connectivity" title="Connectivity" />
      <a
        href="#contact"
        onClick={() => {setToggleMenu(false)}}
        class="mx-8 my-4 sm:mx-6  cursor-pointer rounded bg-yellow-300 px-6 py-2 md:text-lg text-black"
      >
        Contact
      </a>
    </Fragment>
  )

  const NavItem = ({ href, title }) => (
    <a
      href={href}
      onClick={() => {setToggleMenu(false)}}
      class="mx-8 my-4 sm:mx-6 cursor-pointer md:text-lg text-black"
    >
      {title}
    </a>
  )

  return (
    <nav class="sticky flex items-center justify-between p-4 sm:px-8">
      <img src={logo} alt="logo" class="h-16 cursor-pointer"></img>
      <div class="hidden md:flex md:items-center">
        <NavLinks />
      </div>
      {toggleMenu ? (
        <AiOutlineClose
          onClick={() => {setToggleMenu(false)}}
          size={28}
          color="000"
          class="fixed top-9 right-4 cursor-pointer sm:right-8 md:hidden"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => {setToggleMenu(true)}}
          size={28}
          color="000"
          class="cursor-pointer md:hidden"
        />
      )}
      {toggleMenu && (
        <div class="absolute top-20 right-4 bg-gray-200 p-4 sm:right-8 md:hidden">
          <div class="flex flex-col items-end">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
