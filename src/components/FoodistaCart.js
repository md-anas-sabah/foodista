import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const FoodistaCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex m-10 gap-10">
      <div className=" flex flex-col gap-10 w-2/3">
        {cartItems.map((item) => {
          return <ItemCard {...item} />;
        })}
      </div>
      <div className="flex flex-col flex-1  ">
        <button
          className="bg-red-900 h-16 rounded-lg font-bold text-xl"
          onClick={() => handleClearCart()}
        >
          Clear your cart
        </button>
      </div>
    </div>
  );
};

export default FoodistaCart;
