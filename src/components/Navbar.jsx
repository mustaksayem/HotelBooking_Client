import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ThemeControllerBtn from "./ThemeControllerBtn";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const [userOpen, setUserOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(result => toast.success("successfully Logout"))
      .catch(err => toast.error(err));
    setUserOpen(false);
  };

  return (
    <div className="mx-auto bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 py-6">
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                      : "hover:text-[#23BE0A]"
                  }
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rooms"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                      : "hover:text-[#23BE0A]"
                  }
                >
                  <span>Rooms</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mybookings"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A]"
                      : "hover:text-[#23BE0A]"
                  }
                >
                  <span>My Bookings</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-7' src="https://i.ibb.co/FVW22BR/logo.png" alt='' />
            <span className='font-bold'>RoomRover</span>
          </Link>
        </div>

        {/* Routes for large devices */}
        <nav className="header-links md:contents font-medium text-base hidden lg:block">
          <ul className="flex items-center ml-4 w-full justify-center dark:text-red">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A] mr-4"
                    : "hover:text-[#23BE0A] mr-4"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rooms"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A] mr-4"
                    : "hover:text-[#23BE0A] mr-4"
                }
              >
                <span>Rooms</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mybookings"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FFFFFF] border-b-4 p-2 border-[#23BE0A] rounded bg-[#23BE0A] mr-4"
                    : "hover:text-[#23BE0A] mr-4"
                }
              >
                <span>My Bookings</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeControllerBtn />

          {user ? (
            <button onClick={() => setUserOpen(!userOpen)} className="border-2 border-[#FF497C] rounded-full w-[40px]">
              <img src={user?.photoURL} alt="" className="w-full h-full rounded-full" />
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="bg-[#23BE0A] hover:bg-[#23BE0A] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/registration")}
                className="bg-[#23BE0A] hover:bg-[#23BE0A] duration-200 text-white font-bold px-0 xl:px-6 py-1 rounded"
              >
                Signup
              </button>
            </div>
          )}

          {/* User Menu */}
          <div className={`absolute text-center ${userOpen ? "block" : "hidden"} flex flex-col justify-center items-center gap-4 shadow-lg bg-white dark:bg-[#120505] px-1 lg:px-8 py-4 top-16 dark:text-white z-50`}>
            <p className="text-lg font-semibold">{user?.displayName}</p>

            <button
              onClick={() => handleLogOut()}
              className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-1 lg:px-4 xl:px-6 py-1 rounded cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
