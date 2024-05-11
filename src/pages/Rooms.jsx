import { useEffect, useState } from "react";

const Rooms = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/rooms")
      .then(res => res.json())
      .then(data => {
        // Filter the data based on availability
        const availableRooms = data.filter(room => room.availability === "Available");
        setInfo(availableRooms);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {info.map((room, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" />

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{room.room_description}</h3>

            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">{room.room_size}</span>
              <span className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
               Per Night: {room.price_per_night} 
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
