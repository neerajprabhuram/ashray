import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { warehouseSlide, cover3Slide, shipyardSlide } from '../assets'

const Image = ({ src }) => {
  return (
    <div class="h-[650px] sm:h-[550px] ">
      <img src={src} class='object-cover w-full h-full' />
      {/* <div class='w-full h-full bg-gray-200 opacity-25'/> */}
    </div>
  )
}

const Header = () => {
  return (
    <div class="mt-24 mb-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <Image src={warehouseSlide} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cover3Slide} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={shipyardSlide} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Header
