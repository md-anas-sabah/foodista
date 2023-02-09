// import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../hooks/useOnline";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import { MoonIcon } from "@heroicons/react/24/solid";
// import offline from "../assets/offline.webp";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Roboto",
        }}
      >
        <h1>Connect to the internet</h1>
        <p>You're offline. Check your connection</p>
      </div>
    );
  }
  // if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input border rounded-tl-3xl rounded-bl-3xl"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn rounded-tr-3xl rounded-br-3xl border-none text-gray-300"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="bg-gray-900 h-24 w-20 flex flex-col rounded-tr-full rounded-br-full top-3/4 cursor-pointer ">
        {/* <DarkModeIcon className="absolute top-10 text-black " /> */}
        <MoonIcon className="h-10 bg-gray-900 justify-center absolute top-52 left-4" />
      </div>

      <div className="max-w-7xl mx-auto">
        {filteredRestaurants.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>
            No Restaurant match your Filter!!
          </h1>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurants/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
