import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateDate = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const post = useLoaderData();
  const { id } = useParams(); // Added parentheses for useParams
  const { _id, roomId } = post || {};
  const navigate = useNavigate();
  const handleFormSubmission = async (e) => {
    e.preventDefault();
  
    // Add console log here
    console.log("Updating date for id:", id);
  
    const email = user?.email;
    const bookingDate = startDate;
    const roomID = roomId;
  
    const bookRoom = {
      email,
      bookingDate,
    };
  
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_URL}/update/${id}`,
        bookRoom
      );
      console.log(data);
      toast.success("Date Updated");
      navigate("/mybookings");
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
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
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDate;
