import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg aspect-video overflow-hidden">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          className="hover:scale-150"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <h3 className="truncate">{cuisines.join(", ")}</h3>
        <h4 className="">{lastMileTravelString} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
