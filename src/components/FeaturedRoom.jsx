import { Link } from "react-router-dom";

const FeaturedRoom = () => {
  return (
    <div className=" mx-auto my-10 border-t-4 border-blue-500">
       <div className="text-center my-6">
       <h1 className="text-3xl font-bold">Check Our Featured Rooms</h1>
        <p className="font-semibold">Explore our handpicked selection of Featured Rooms, each meticulously designed for your utmost comfort and satisfaction. From luxurious amenities to breathtaking views, these rooms offer an unforgettable stay tailored to elevate your experience. Discover your perfect retreat today.</p>
       </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div>
            <img
              className="object-cover w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="py-5 text-center ">
              <div className="block text-xl font-bold text-gray-800 dark:text-white">John Doe</div>
              <div className="text-sm  text-gray-700 dark:text-gray-200">Software Engineer</div>
              <div className="mt-4">
              <Link
                to="/rooms"
                className="w-full px-5 py-3  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
              >
                Book Now
              </Link>
            </div>
            </div>
          
          </div>
        </div>
        {/* 2 */}
        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div>
            <img
              className="object-cover w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="py-5 text-center ">
              <div className="block text-xl font-bold text-gray-800 dark:text-white">John Doe</div>
              <div className="text-sm  text-gray-700 dark:text-gray-200">Software Engineer</div>
              <div className="mt-4">
              <Link
                to="/rooms"
                className="w-full px-5 py-3  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
              >
                Book Now
              </Link>
            </div>
            </div>
          
          </div>
        </div>
        {/* 3 */}
        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div>
            <img
              className="object-cover w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="py-5 text-center ">
              <div className="block text-xl font-bold text-gray-800 dark:text-white">John Doe</div>
              <div className="text-sm  text-gray-700 dark:text-gray-200">Software Engineer</div>
              <div className="mt-4">
              <Link
                to="/rooms"
                className="w-full px-5 py-3  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
              >
                Book Now
              </Link>
            </div>
            </div>
          
          </div>
        </div>
        {/* 4 */}

        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div>
            <img
              className="object-cover w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="py-5 text-center ">
              <div className="block text-xl font-bold text-gray-800 dark:text-white">John Doe</div>
              <div className="text-sm  text-gray-700 dark:text-gray-200">Software Engineer</div>
              <div className="mt-4">
              <Link
                to="/rooms"
                className="w-full px-5 py-3  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
              >
                Book Now
              </Link>
            </div>
            </div>
          
          </div>
        </div>
        {/* 5 */}
        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div>
            <img
              className="object-cover w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="py-5 text-center ">
              <div className="block text-xl font-bold text-gray-800 dark:text-white">John Doe</div>
              <div className="text-sm  text-gray-700 dark:text-gray-200">Software Engineer</div>
              <div className="mt-4">
              <Link
                to="/rooms"
                className="w-full px-5 py-3  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
              >
                Book Now
              </Link>
            </div>
            </div>
          
          </div>
        </div>
        {/* 6 */}
        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div>
            <img
              className="object-cover w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="py-5 text-center ">
              <div className="block text-xl font-bold text-gray-800 dark:text-white">John Doe</div>
              <div className="text-sm  text-gray-700 dark:text-gray-200">Software Engineer</div>
              <div className="mt-4">
              <Link
                to="/rooms"
                className="w-full px-5 py-3  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
              >
                Book Now
              </Link>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
