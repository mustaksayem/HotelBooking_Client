import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2"
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { MdOutlineRateReview } from "react-icons/md";

const MyBookings = () => {
  
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_URL}/mybookings/${user?.email}`
    );
    setPosts(data);
  };

  const handleDelete = async (id, bookingDate) => {
    const cancellationDeadline = calculateCancellationDeadline(bookingDate);
    const currentDate = new Date();

    if (currentDate.getTime() > cancellationDeadline.getTime()) {
      toast.error("You can only delete bookings one day before the booked date.");
      return;
    }

    try {
      const confirmed = await confirmDelete();
      if (confirmed) {
        const { data } = await axios.delete(
          
          `${import.meta.env.VITE_URL}/mybooking/${id}`
        );
        console.log(data);
        toast.success("Delete Successful");
        // Update availability to "Available" in the backend
        await axios.put(`${import.meta.env.VITE_URL}/roomsAvailable/${id}`, { availability: "Available" });
        getData();
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const confirmDelete = async () => {
    return new Promise((resolve) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete It!",
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  };

  const calculateCancellationDeadline = (bookingDate) => {
    const deadline = new Date(bookingDate);
    deadline.setDate(deadline.getDate() - 1); // Subtract one day
    return deadline;
  };
// okkkkkkkkkkkkkkkkkkkkkkk
  return (
  
    <div>
        <Helmet> <title>MyBookings</title></Helmet>
      <div className=" overflow-hidden z-50">
    <section className='container px-4 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 py-6'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 dark:text-white'>
          Total Booked Room
        </h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400'>
          {posts.length} Room
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-300 dark:border-gray-700 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-gray-200 dark:bg-gray-800 '>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-lg font-bold text-center text-gray-500 dark:text-gray-400  border-r-2 border-gray-600'>
                      <div className='gap-x-2'>
                        <span>Room Description</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 border-r-2 border-gray-600'>
                      <div className='gap-x-2'>
                        <span>Room Status</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 border-r-2 border-gray-600'>
                      <div className='gap-x-2'>
                        <span>Booking Date</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 '>
                      <div className='gap-x-2'>
                        <span>Action</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                    {posts.map((post) => (
                      <tr key={post._id}>
                        <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                          {post.room_description}
                        </td>

                        <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                          {post.availability}
                        </td>
                        <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                          {new Date(post.bookingDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </td>

                        <td className=' px-4 py-3.5  text-sm whitespace-nowrap'>
                          <div className='flex justify-around  '>
                            <div>
                              <Link
                                to={`/update/${post._id}`}
                                title='Update'
                                className=' text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none '>
                                {/* <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  className='size-7'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                  />
                                </svg> */} Update
                              </Link>
                            </div>
                            <div>
                              <Link to={`/review/${post._id}`}  title='Review'
                                  className=' text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none '><p className="size-7">Review</p></Link>
                            </div>
                            <div>
                              <button
                                onClick={() => handleDelete(post._id, post.bookingDate)}
                                title='Delete'
                                className='text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none'>
                                {/* <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  className='size-7'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                  />
                                </svg> */}Cancel
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default MyBookings;
