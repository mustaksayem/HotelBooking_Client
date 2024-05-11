import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {room_description,availability,special_offers}= data || {}
    return (
        <div>
            {room_description}
            {availability}
            {special_offers}
        </div>
    );
};

export default RoomDetails;