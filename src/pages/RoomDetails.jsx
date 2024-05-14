import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";


// okkkkkkkkkk

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';








const RoomDetails = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { room_description, price_per_night, availability, room_size, room_images, special_offers, _id } = data || {};

  const [showModal, setShowModal] = useState(false);
  const [roomBookingDetails, setRoomBookingDetails] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/reviews`)
      .then((res) => res.json())
      .then((reviewsData) => {
        setReview(reviewsData);
      });
  }, []);

  const toggleModal = (show) => {
    setShowModal(show);
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const roomId = _id;
    const email = user?.email;
    const availability = "Booked";
    const bookingDate = startDate;

    const bookRoom = {
      email,
      bookingDate,
      room_description,
      price_per_night,
      room_size,
      availability,
      roomId,
      room_images,
      special_offers
    };

    const updateavalability = { availability };
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_URL}/booking`, bookRoom);
      const { data2 } = await axios.put(`${import.meta.env.VITE_URL}/rooms/${roomId}`, updateavalability);
      setRoomBookingDetails(bookRoom); // Set room booking details in state
      toggleModal(true); // Show modal
      // toast.success("Booked Room");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = ()=>{
    toast.success("Data Inserted")
    toggleModal(false);
    navigate("/mybookings")
  }
// okkkkkk
  return (
    <div>
      <div className="flex flex-col md:flex-col lg:flex-row gap-3 justify-center items-center">
        <div className="w-full lg:w-1/2   rounded-2xl items-center p-2 flex   justify-center">
          


          <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
        <SwiperSlide><img className="w-full" src={room_images[0]} alt="" />  </SwiperSlide>
        <SwiperSlide><img className="w-full" src={room_images[1]} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={room_images[2]} alt="" /></SwiperSlide>
       
      </Swiper>













        </div>
        <div className="w-1/2 text-center ">
          <h2 className="text-[40px] font-bold text-gray-500">{room_description}</h2>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Room Size: {room_size}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Price per night: ${price_per_night}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Availability: {availability}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Offer: {special_offers}</p>
        </div>
        <div>
          <form onSubmit={handleFormSubmission}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  disabled
                  defaultValue={user?.email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <p>Booking Date</p>
                <DatePicker
                  className="border mt-2 p-2 rounded-md "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="flex justify-center m-4">
              {user && (
                <button
                  disabled={availability === "Booked"}
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  {availability === "Booked" ? "Booked" : "Book Now"}
                </button>
              )}
              {!user && (
                <Link to={"/login"}>
                  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Book Now
                  </button>{" "}
                </Link>
              )}
            </div>
            {showModal && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Room Summary</h2>
                    <button onClick={() => toggleModal(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  {/* Display room booking details */}
                  {roomBookingDetails && (
                    <div>
                      <p>Room Description: {roomBookingDetails.room_description}</p>
                      <p>Price Per Night: ${roomBookingDetails.price_per_night}</p>
                      <p>Booking Date: {roomBookingDetails.bookingDate.toString()}</p>
                    </div>
                  )}
                  <button onClick={()=>handleClick()} type="submit">Confirm</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
