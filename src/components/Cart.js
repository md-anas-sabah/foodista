import { useEffect, useState } from "react";

function Cart({ state, dispatch }) {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.qty), 0)
    );
  }, [cart]);

  return (
    <div className="flex w-96 rounded-lg flex-col m-10 p-10 h-screen overflow-y-scroll shadow shadow-white">
      <b className="text-7xl self-center">CART</b>
      <b className="self-center">SubTotal: $ {total}</b>

      {cart.length > 0 ? (
        cart.map((prod) => (
          <div
            key={prod.id}
            className="flex flex-col p-3 m-5 border justify-between rounded-lg shadow shadow-white"
          >
            <div className="flex gap-3">
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ height: 70, objectFit: "cover" }}
              />

              <div className="flex flex-col justify-evenly">
                <p>{prod.title}</p>
                <p className="font-bold">${prod.price}</p>
              </div>
            </div>

            <div className="flex justify-center mt-4 align-middle gap-4">
              <button
                className=" p-2 w-8 bg-red-600"
                onClick={() => changeQty(prod.id, prod.qty - 1)}
              >
                -
              </button>
              <span className="p-2 w-8">{prod.qty}</span>
              <button
                className="bg-green-600 p-2 w-8"
                onClick={() => changeQty(prod.id, prod.qty + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span className=" p-10 self-center">Cart is empty</span>
      )}
    </div>
  );
}

export default Cart;
