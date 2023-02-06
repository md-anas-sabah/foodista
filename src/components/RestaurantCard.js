import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card flex-col space-y-2 border-gray-50 rounded-xl shadow">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-lg font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
