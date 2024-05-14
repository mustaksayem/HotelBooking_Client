import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Review = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const post = useLoaderData();

  const { roomId } = post;

  const handleFormSubmission = async e => {
    e.preventDefault();
    const form = e.target;
    const roomId2 = roomId;
    const email = user?.email;
    const rating = form.rating.value;
    const reviewText = form.comment.value;
    const reviewDate = startDate;
    const reviewRoom = {
      email,
      reviewDate,
      rating,
      reviewText,
      roomId2
    };
    console.log(reviewRoom);
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_URL}/review`, reviewRoom);
      console.log(data);

      toast.success("Data Inserted");
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Added Failed");
    }
  };
  return (
    <div>
      <Helmet>
        {" "}
        <title>Review</title>
      </Helmet>
      <div className="bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 py-6">
      <section className="max-w-4xl  mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 p-10">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Review</h2>

        <form onSubmit={handleFormSubmission}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Rating</label>
              <input
                name="rating"
                type="number"
                min={1}
                max={5}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">
                User Email{" "}
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
              <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                Comment
              </label>
              <input
                name="comment"
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <p>Review Date</p>
              <DatePicker className="border mt-2 p-2 rounded-md bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 " selected={startDate} onChange={date => setStartDate(date)} />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
      </div>
    </div>
  );
};

export default Review;
