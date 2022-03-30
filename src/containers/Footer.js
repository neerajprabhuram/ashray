import { logo } from '../assets'

const Footer = () => {
  return (
    <div class="flex flex-col items-center justify-between bg-gray-200 px-12 py-8 md:flex-row">
      <p class=" mb-5">Designed by xpologo.com</p>
      <img src={logo} alt="logo" class="mb-5 h-16 cursor-pointer" />
      <p class="text-center font-PTSerif">
        Copyright 2016 Ashray Logistics India (P) Ltd, <br /> All Right Reserved
      </p>
    </div>
  )
}

export default Footer
