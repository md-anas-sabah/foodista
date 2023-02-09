import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const FoodistaCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return cartItems.length === 0 ? (
    <div className="flex flex-col items-center mb-20">
      <img
        src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/pink-restaurants-icon-19.png"
        alt="LOGO"
        className="h-96 w-96 "
      />
      <h1 className="text-3xl font-bold mb-12 m-10">Your cart is empty</h1>

      <Link to="/">
        <button className="bg-button h-12 w-96 font-semibold uppercase rounded-3xl">
          Go to nearby restaurant
        </button>
      </Link>
    </div>
  ) : (
    <div className="flex m-10 gap-10">
      <div className=" flex flex-col gap-10 w-2/3">
        {cartItems.map((item) => {
          return <ItemCard {...item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col flex-1  ">
        <button
          className="bg-red-900 h-16 rounded-lg text-xl"
          onClick={() => handleClearCart()}
        >
          Clear your cart
        </button>
      </div>
    </div>
  );
};

export default FoodistaCart;
