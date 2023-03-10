import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return false;
};

const Title = () => (
  <Link to="/" className="title-img">
    <img
      className="logo"
      alt="logo"
      src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/pink-restaurants-icon-19.png"
      style={{ height: "60px", width: "60px" }}
    />
    <p>Foodista</p>
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/carts">
              Cart
              <span className="absolute top-6 h-3 w-3 text-center">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="buttons flex gap-12">
        <button className="">
          <Link to="/instamart">
            <p className="button-75">✨ Shop with Foodista ✨</p>{" "}
          </Link>
        </button>
        {isLoggedIn ? (
          <button className="header-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button className="header-btn" onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
