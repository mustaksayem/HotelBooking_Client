import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [info, setInfo] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/rooms`)
      .then(res => res.json())
      .then(roomsData => {
        setInfo(roomsData); // Set rooms data
  
        // Fetch reviews data
        fetch(`${import.meta.env.VITE_URL}/reviews`)
          .then(res => res.json())
          .then(reviewsData => {
            // Optionally, you can set the reviews data in the state if needed
            setReview(reviewsData);
          });
      });
  }, []);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {info.map((room, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          {/* Display the number of reviews for each room */}
          

          <Link to={`/roomdetails/${room._id}`}><img className="h-[50vh]" src={room.room_images[0]} alt="" />     </Link>
          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{room.room_description}</h3>

            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">{room.room_size}</span>
              <span className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
               Per Night: {room.price_per_night} 
              </span>
            </div>
            <p className="text-center">Number of Reviews: {review.filter(item => item.roomId2 === room._id).length}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
