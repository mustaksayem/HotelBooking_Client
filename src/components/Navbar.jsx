import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between bg-base-100 shadow-sm container py-4">
      <div className="flex justify-center">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="https://i.ibb.co/FVW22BR/logo.png" alt="" />
          <span className="font-bold">RoomRover</span>
        </div>
      </div>
      {/* middle part */}
      <div className="flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/mybookings">My Bookings</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div title={user?.displayName} className="w-10 rounded-full">
                <img referrerPolicy="no-referrer" alt="User Profile Photo" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="mt-2">
                <button onClick={logOut} className="bg-gray-200 block text-center">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
