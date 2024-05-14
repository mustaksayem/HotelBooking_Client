import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";




const Error = () => {
    return (
      <div>
      
      <div>
      <Helmet> <title>Error</title></Helmet>

        <section className='flex items-center  p-16  bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200'>
          <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <div className='max-w-md text-center'>
              <h2 className='mb-8 font-extrabold text-9xl text-gray-400'>
                <span className='sr-only'>Error</span>404
              </h2>
              <p className='text-2xl font-semibold md:text-3xl'>
                Sorry, we could not find this page.
              </p>
              <p className='mt-4 mb-8 text-gray-600'>
                But do not worry, you can find other things on our homepage
              </p>
              <Link to="/"
               
                className='px-8 py-3 font-semibold rounded '>
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
        
      </div>
    </div>
    );
};

export default Error;