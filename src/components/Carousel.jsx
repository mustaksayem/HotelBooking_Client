
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import slider1 from '../assets/images/sliderr1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'
const Carousel = () => {
    return (
        <>
       <div className=''>
       <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop = {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide> <Slide image = {slider1} text='Indulge in Tranquility: Welcome to Our Luxurious Hotel Rooms! Escape the Ordinary, Embrace the Extraordinary.'></Slide>  </SwiperSlide>
          <SwiperSlide> <Slide image = {slider2} text='Unwind in Style: Discover Your Home Away from Home in Our Exquisite Hotel Rooms. Immerse Yourself in Comfort and Elegance. Reserve Your Blissful Retreat Now!'></Slide>  </SwiperSlide>
          <SwiperSlide> <Slide image = {slider3} text='Elevate Your Stay: Experience Unparalleled Comfort in Our Chic Hotel Rooms. Where Every Detail is Crafted for Your Ultimate Relaxation.'></Slide>  </SwiperSlide>
          
        </Swiper>
       </div>
      </>
    );
};

export default Carousel;