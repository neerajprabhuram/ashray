import FeatureItem from '../components/FeatureItem'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { FaRupeeSign, FaShippingFast, FaBox, FaWarehouse } from 'react-icons/fa'
import { GiSpanner } from 'react-icons/gi'
import { IoIosPaper } from 'react-icons/io'
import { MdOutlineMoneyOff } from 'react-icons/md'

const Features = () => {
  return (
    <div id='features' class="mb-10 p-4 sm:px-8">
      <h1 class="mb-10 text-center font-PTSerif text-3xl">Features</h1>
      <div class="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <FeatureItem
          icon={<BsFillCheckSquareFill size={32} fill="#111" />}
          text="Customs officer at site providing in-house customs clearance"
        />
        <FeatureItem
          icon={<GiSpanner size={32} fill="#111" />}
          text="State of the Art, built-to-suit, custom bonded FTWZ - free trade
          warehousing zone"
        />
        <FeatureItem
          icon={<FaRupeeSign size={32} fill="#111" />}
          text="No capital cost, low operational and establishment costs"
        />
        <FeatureItem
          icon={<FaBox size={32} fill="#111" />}
          text="Packaging, re-packaging, assembling, value addition and re-exports
          allowed"
        />
        <FeatureItem
          icon={<FaShippingFast size={32} fill="#111" />}
          text="All input goods, physical export goods and services are Zero-rated under IGST"
        />
        <FeatureItem
          icon={<FaWarehouse size={32} fill="#111" />}
          text="Customized warehousing, break bulk, containerized and dry cargo
          storage and more"
        />
        <FeatureItem
          icon={<IoIosPaper size={32} fill="#111" />}
          text="Single window clearances for Central and State level approvals"
        />
        <FeatureItem
          icon={<MdOutlineMoneyOff size={32} fill="#111" />}
          text="Fiscal and Regulatory Tax Benefits as applicable to units in SEZs"
        />
      </div>
      <h2 class="mt-10 text-center font-PTSerif text-2xl">Other features</h2>
      <div class="mt-5 text-center">
        <p class="mt-2">➤ Plug and play model, Walk to Work concept</p>
        <p class="mt-2">➤ Higher levels of National and Global connectivity</p>
        <p class="mt-2">➤ Located in Industry friendly state of Tamil Nadu</p>
        <p class="mt-2">
          ➤ Duty deferment benefits and faster customs clearances
        </p>
        <p class="mt-2">➤ Power, Water, Human Resource ready</p>
      </div>
    </div>
  )
}

export default Features
