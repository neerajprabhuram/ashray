import {ConnectivityItem1, ConnectivityItem2} from '../components/ConnectivityItem'
import { car, ship, train, airplane } from '../assets'

const Connectivity = () => {
  return (
    <div id='connectivity' class="bg-yellow-50 p-4 sm:px-8 lg:px-20">
      <h1 class="m-5 text-center font-PTSerif text-3xl">Connectivity</h1>
      <div class='grid grid-cols-1 md:grid-cols-2 place-items-middle'>
        <ConnectivityItem1
          title="By Road"
          image={car}
          line1="Tuticorin  60 km"
          line2="Madurai - 160 km"
          line3="Chennai - 650 km"
          line4="Thiruvananthapuram - 130 km"
          line5="On NH 7 between Kanyakumari & Tirunelveli"
        />
        <ConnectivityItem2
          title="By Rail"
          image={train}
          line1="Nanguneri - 4 km"
          line2="Tirunelveli - 30 km"
          line3="Kanyakumari - 40 km"
          line4="Madurai - 160 km"
          line5="Chennai - 650 km"
        />
        <ConnectivityItem1
          title="By Air"
          image={airplane}
          line1="Tuticorin Airport - 60 km"
          line2="Thiruvananthapuram Int'l Airport - 130 km"
          line3="Madurai International Airport - 160 km"
          line4="Chennai International Airport - 650 km"
        />
        <ConnectivityItem2
          title="By Sea"
          image={ship}
          line1="Tuticorin Port - 82 km"
        />
      </div>
    </div>
  )
}

export default Connectivity
