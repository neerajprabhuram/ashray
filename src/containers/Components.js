import ComponentItem from '../components/ComponentItem'
import {
  corp_off,
  driver_rest,
  int_log,
  open_space,
  scm,
  staff_accom,
  truck,
  warehouse,
} from '../assets'

const Components = () => {
  return (
    <div class="mb-10 p-4 sm:px-8">
      <h1 class="mb-10 text-center font-PTSerif text-3xl">Components</h1>
      <div class="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3">
        <ComponentItem img={warehouse} title="Warehouse" />
        <ComponentItem img={staff_accom} title="Staff Accommodation" />
        <ComponentItem img={driver_rest} title="Driver's Restroom" />
        <ComponentItem img={scm} title="Supply Chain Management" />
        <ComponentItem img={corp_off} title="Corporate Office" />
        <ComponentItem img={truck} title="Truck Terminal" />
        <ComponentItem img={int_log} title="Integrated Logistics" />
        <ComponentItem img={open_space} title="Open Space Yard" />
      </div>
    </div>
  )
}

export default Components
