import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate()
    const {createUser,updateUserProfile,user,setUser,setLoading}=useContext(AuthContext)
    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form?.name.value;
        const imageURL = form?.imageURL.value;
        const email = form?.email.value;
        const password = form?.password.value;
    
        if (password.length < 6) {
          toast.error("password must be have at least 6 characters");
          form.reset();
          return;
        }
        if (!/[A-Z]/.test(password)) {
          toast.error("password must be have at least a capital  letter");
          form.reset();
          return false;
        }
    
        if (!/[a-z]/.test(password)) {
          toast.error("password must be have at least a small  letter");
          form.reset();
          return false;
        }
    
        //create user
        try {
          const result = await createUser(email, password);
          console.log(result);
          await updateUserProfile(name, imageURL);
          setUser({ ...result?.user, photoURL: imageURL, displayName: name });
          const { data } = await axios.post(
            `${import.meta.env.VITE_URL}/jwt`,
            { email: result?.user?.email },
            { withCredentials: true }
          );
          setLoading(false);
          navigate(location?.state ? location.state : "/");
          toast.success("Registration successful");
        } catch (err) {
          // setLoading(false);
          toast.error(err.message);
        }
      };
    return (
      
       <div>
        <Helmet> <title>Login</title></Helmet>
         <div className='flex justify-center items-center min-h-[calc(100vh-306px)] py-10 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200'>
          <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 rounded-lg shadow-lg  lg:max-w-4xl '>
            <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
              <div className='flex justify-center mx-auto'>
                <img
                  className='w-auto h-7 sm:h-8'
                  src='https://i.ibb.co/FVW22BR/logo.png'
                  alt=''
                />
              </div>
    
              
    
              <form onSubmit={handleSignUp}>
                <div className='pt-4 '>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='name'
                  >
                    Username
                  </label>
                  <input
                    id='name'
                    autoComplete='name'
                    name='name'
                    className='block w-full px-4 py-2 text-gray-700 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                    type='text'
                  />
                </div>
                <div className='mt-4'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='photo'
                  >
                    Photo URL
                  </label>
                  <input
                    id='photo'
                    autoComplete='photo'
                    name='imageURL'
                    className='block w-full px-4 py-2  bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                    type='text'
                  />
                </div>
                <div className='mt-4'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='LoggingEmailAddress'
                  >
                    Email Address
                  </label>
                  <input
                    id='LoggingEmailAddress'
                    autoComplete='email'
                    name='email'
                    className='block w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                    type='email'
                  />
                </div>
    
                <div className='mt-4'>
                  <div className='flex justify-between'>
                    <label
                      className='block mb-2 text-sm font-medium text-gray-600 '
                      htmlFor='loggingPassword'
                    >
                      Password
                    </label>
                  </div>
    
                  <input
                    id='loggingPassword'
                    autoComplete='current-password'
                    name='password'
                    className='block w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                    type='password'
                  />
                </div>
                <div className='mt-6'>
                  <button
                    type='submit'
                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                  >
                    Sign Up
                  </button>
                </div>
              </form>
    
              <div className='flex items-center justify-between mt-4'>
                <span className='w-1/5 border-b  md:w-1/4'></span>
    
                <Link
                  to='/login'
                  className='text-xs text-gray-500 uppercase  hover:underline'
                >
                  or sign in
                </Link>
    
                <span className='w-1/5 border-b  md:w-1/4'></span>
              </div>
            </div>
            <div
              className='hidden bg-cover bg-center lg:block lg:w-1/2'
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
              }}
            ></div>
          </div>
        </div>
       </div>
      );
};

export default Register;