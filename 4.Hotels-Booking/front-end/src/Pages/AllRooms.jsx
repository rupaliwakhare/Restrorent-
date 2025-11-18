import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../Components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
      <div className="w-full">
        <div className="flex flex-col items-start text-left mb-8">
          <h1 className="text-4xl md:text-[40px] font-playfair">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
           
            <div className="h-64 w-full md:w-1/2 overflow-hidden rounded-xl">
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                title="View Room Details"
                className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>

          
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer hover:text-blue-600"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item,index)=>(
                  <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/70">
                    <img src={facilityIcons[item] } alt={item} className="w-5 h-5"/>
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <div className="lg:w-1/3">{}</div>
    </div>
  );
};

export default AllRooms;
