import { logistics } from '../assets'

const About = () => {
  return (
    <div class="mb-10 flex flex-col items-center p-4 sm:px-8 lg:px-20 xl:flex-row-reverse">
      <div class='md:mb-10 xl:ml-10'>
        <h1 class="mb-10 text-center font-PTSerif text-3xl xl:text-left m-5">About us</h1>
        <div class='md:flex xl:flex-col'>
          <p class="m-5 text-center flex-1 md:text-left ">
            ASHRAY LOGISTICS INDIA PRIVATE LIMITED is envisioned with the
            objective to provide total and integrated logistics solution to
            corporate and industrial units including warehousing facilities and
            supply chain management.
          </p>
          <p class="m-5 mb-10 text-center flex-1 md:text-left">
            The main promoter of the Company is Mr. PARASHAR LOHIA, aged 45
            years. He has over 25 years of entrepreneurial experience in the
            logistics industry with his family being in the logistics business
            for the past 50 years.
          </p>
        </div>
      </div>
      <img src={logistics} class="mb-10 max-w-sm rounded-md sm:max-w-md md:max-w-xl " />
    </div>
  )
}

export default About
