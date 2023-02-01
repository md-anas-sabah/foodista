function Products({ state, dispatch }) {
  const { products, cart } = state;

  return (
    <div className="flex flex-wrap m-10 place-content-evenly w-8/12 border rounded-lg overflow-hidden">
      {products.map((prod) => (
        <div
          key={prod.key}
          className="flex p-4 flex-col border border-gray-700 w-1/3 gap-10 "
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            className="h-60 object-fill"
          />

          <div className="flex justify-between">
            <p>{prod.title}</p>
            <p className="text-bold">${prod.price}</p>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              className="p-5   bg-red-600 rounded-md text-white cursor-pointer "
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button
              className="p-5   bg-green-600 rounded-md text-white cursor-pointer "
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    qty: 1,
                    price: prod.price,
                  },
                });
              }}
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
