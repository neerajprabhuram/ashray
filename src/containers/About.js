import { logistics, brochure } from '../assets'
import { FaFilePdf } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' class="mb-10 flex flex-col items-center bg-yellow-50 p-4 sm:px-8 lg:px-20 xl:flex-row-reverse">
      <div class=" md:mb-10 xl:ml-10">
        <h1 class="m-5 mb-7 text-center font-PTSerif text-3xl">About us</h1>
        <div class="md:flex xl:flex-col">
          <p class="m-5 flex-1 text-center md:text-left ">
            ASHRAY LOGISTICS INDIA PRIVATE LIMITED is envisioned with the
            objective to provide total and integrated logistics solution to
            corporate and industrial units including warehousing facilities and
            supply chain management.
          </p>
          <p class="m-5 mb-7 flex-1 text-center md:text-left">
            The main promoter of the Company is Mr. PARASHAR LOHIA, aged 45
            years. He has over 25 years of entrepreneurial experience in the
            logistics industry with his family being in the logistics business
            for the past 50 years.
          </p>
        </div>
        <div class="m-auto mb-10 flex w-56 cursor-pointer items-center justify-center rounded bg-yellow-300 p-4 md:w-72">
          <FaFilePdf size={28} />
          <a href={brochure} target="_blank">
            <button class="mx-3 text-black md:text-lg">
              Download brochure
            </button>
          </a>
        </div>
      </div>
      <img
        src={logistics}
        alt="logistics"
        class="mb-10 max-w-sm rounded-md sm:max-w-md md:max-w-xl"
      />
    </div>
  )
}

export default About
