import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Fetch reviews data
    fetch("http://localhost:9000/reviews")
      .then((res) => res.json())
      .then((reviewsData) => {
        // Filter the reviews based on roomId matching id from useParams
        const filteredReview = reviewsData.filter(
          (review) => review.roomId2 === id
        );
        setReview(filteredReview);
      });
  }, [id]);

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const {
    room_description,
    price_per_night,
    availability,
    room_size,
    room_images,
    special_offers,
    _id,
  } = data || {};

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
      special_offers,
    };

    const updateavalability = { availability };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/booking`,
        bookRoom
      );
      console.log(data);
      toast.success("Booked Room");
      const { data2 } = await axios.put(
        `${import.meta.env.VITE_URL}/rooms/${roomId}`,
        updateavalability
      );
      console.log(data2);
      navigate("/mybookings");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-col lg:flex-row gap-3 justify-center items-center">
        <div className="w-full lg:w-1/2  bg-[#23BE0A0D] rounded-2xl items-center p-2 flex   justify-center">
          <img className="" src={room_images[0]} alt="" />
        </div>
        <div className="w-1/2 text-center ">
          <h2 className="text-[40px] font-bold text-gray-500">
            {room_description}
          </h2>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">
            Room Size: {room_size}
          </p>

          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">
            Price per night: ${price_per_night}
          </p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">
            Availability: {availability}
          </p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">
            Offer: {special_offers}
          </p>
        </div>
        <div>
          <form onSubmit={handleFormSubmission}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
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
              <button
                disabled={availability === "Booked"}
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                {availability === "Booked" ? "Booked" : "Book Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Displaying Reviews */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div>
          {review.map((reviewItem, index) => (
            <div key={index} className="mb-4 border rounded-md p-4">
              <p className="font-semibold">{reviewItem.email}</p>
              <p>{reviewItem.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
