import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import useResMenu from "../hooks/useResMenu";
import { addItem } from "../utils/cartSlice";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  // const restaurantMenu = useRestaurantMenu(id);
  const restaurantMenu = useResMenu(id);
  const dispatch = useDispatch();

  const handleItem = () => {
    dispatch(addItem("Grapes"));
  };

  return (
    <div className="restaurantMenu">
      <div className="restaurantMenu__img-section">
        <img src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId} alt="" />
      </div>
      <div className="restaurantMenu__info-section">
        <h1>{restaurantMenu?.name}</h1>
        <p>{`Area: ` + restaurantMenu?.area}</p>
        <p>{`City: ` + restaurantMenu?.city}</p>
        <p>{`Rating: ` + restaurantMenu?.totalRatingsString}</p>
        <button>Feedback</button>
      </div>
      <div className="restaurantMenu__menu p-10">
        <h1 className="text-3xl mb-10">Menu</h1>
        {!restaurantMenu?.menu?.items ? (
          <ShimmerRestaurantMenu />
        ) : (
          <ul>
            {Object.values(restaurantMenu?.menu?.items).map((item) => (
              <li key={item.id}>
                {<img src={IMG_CDN_URL + item.cloudinaryImageId} alt="" />}{" "}
                <p>{item.name}</p>
                <button onClick={() => handleItem()}>Add Item</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
