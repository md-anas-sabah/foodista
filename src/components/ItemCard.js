import { IMG_CDN_URL } from "../Constants";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const ItemCard = ({ name, description, cloudinaryImageId, price }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="flex items-center bg-gray-900 shadow rounded-lg gap-3">
      <div className="rounded-lg aspect-video overflow-hidden object-cover  ">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="img"
          className="h-40 w-40 text-gray-400 bg-gray-900"
        />
      </div>
      <div className="flex flex-col  bg-gray-400 w-3/6 ">
        <h2 className="font-bold text-2xl text-gray-400 bg-gray-900">{name}</h2>
        <h3 className="font-semibold text-lg text-gray-400 bg-gray-900 truncate">
          {description}
        </h3>
        <h4 className="font-semibold text-gray-400 bg-gray-900">
          {`Cost ₹${price / 100}`}
        </h4>
      </div>
      <div className="h-10 w-28 flex justify-center ml-56 bg-gray-900">
        <button>
          <XMarkIcon
            className="h-10 bg-gray-900 "
            onClick={() => handleRemoveItem()}
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
