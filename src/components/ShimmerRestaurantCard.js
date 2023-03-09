import React from "react";

const ShimmerRestaurantCard = () => {
  return (
    <div className="flex flex-col w-[20rem] rounded-lg animate-pulse">
      <div className="rounded-lg aspect-video overflow-hidden bg-gray-900">
        {/* <img src="" alt="thumbnails" className=" object-cover" /> */}
      </div>
      <ul className="flex flex-col justify-center px-4 py-2">
        <li className="text-lg font-bold truncate h-5 rounded-lg bg-gray-400"></li>
        <li className="font-semibold text-gray-500 h-3 w-1/2 bg-gray-400 mt-1 rounded-lg truncate"></li>
        <li className="font-semibold text-gray-500 h-3  w-1/2 bg-gray-400 mt-1 rounded-lg truncate"></li>
      </ul>
    </div>
  );
};

export default ShimmerRestaurantCard;
