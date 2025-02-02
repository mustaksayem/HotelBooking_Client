import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const ReviewShow = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
        const intervalId = setInterval(fetchReviews, 5000); // Fetch reviews every 5 seconds
        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []); 

    const fetchReviews = () => {
        fetch(`${import.meta.env.VITE_URL}/reviews`)
            .then(res => res.json())
            .then(reviewData => {
                setReviews(reviewData);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    };

    // Function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="star">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="star">&#9734;</span>);
            }
        }
        return stars;
    };

    return (
       <div className=" border-t-4 border-blue-500">
         <section className="testimonial-container bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 ">
            <div className="title mt-6">
                <h2>Testimonial</h2>
                <p>What members are saying.</p>
            </div>

            <div className="slider-container pb-6 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200">
                <Splide
                    options={{
                        perPage: 1,
                        autoplay: true,
                        interval: 5000, // Autoplay interval in milliseconds (5 seconds)
                        speed: 1000,
                        rewind: true,
                        rewindByDrag: true,
                    }}
                >
                    {reviews.map((review) => (
                        <SplideSlide className=' bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200' key={review.id}>
                            <div className="content ">
                                <p className=" text-slate-600 dark:text-gray-200 ">{review.email}</p>
                                <div className="info">
                                    <div className="rating">
                                        {renderStars(review.rating)}
                                    </div>
                                    <p> Rating: {review.rating} </p>
                                    <p className="user">{review.reviewDate}</p>
                                    <p>{review.reviewText}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
       </div>
    );
};

export default ReviewShow;
