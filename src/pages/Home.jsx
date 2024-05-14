import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import FeaturedRoom from "../components/FeaturedRoom";
import MapHome from "../components/MapHome";
import Newsletter from "../components/Newsletter";
import ReviewShow from "../components/ReviewShow";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    
    document.getElementById("my_modal_1").showModal();
  }, []); 

  return (
    <div className="bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200">
      <Helmet> <title>Home</title></Helmet>
      <div>
    
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box w-[80vh] bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200">
          <div>
          <div className="hero " style={{backgroundImage: 'url(https://i.ibb.co/Y7V6cRK/newsleeter.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-700">50% Discount For New User</h1>
     
   
    </div>
  </div>
</div>
          </div>
          <div className="modal-action">
            <form method="dialog">
            
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

   
      <Carousel />
      <FeaturedRoom />
      <Newsletter />
      <ReviewShow />
      <MapHome />
    </div>
    </div>
  );
};

export default Home;
