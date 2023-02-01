import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import { cartReducer } from "../Reducers/cartReducer";
import Products from "./Products";
import Cart from "./Cart";
const Instamart = () => {
  const [search, setSearch] = useState("");

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  console.log(state);

  async function getProducts() {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCT",
      payload: data.products,
    });
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="instamart flex flex-col items-center bg-gray-800">
      <div className="instamart-input flex justify-center items-end gap-4 h-52 bg-white w-9/12 rounded-b-full p-10">
        <div className=" instamart-input_container flex items-center bg-white w-9/12 border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for items.."
            className="h-12 bg-white w-9/12 flex-1 p-4 text-black text-xl focus:outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="text-black p-2 ">Search</button>
        </div>
      </div>

      <div className="flex flex-row bg-gray-800">
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Instamart;
