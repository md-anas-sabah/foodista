const ShimmerRestaurantMenu = () => {
  return (
    <div className="shimmerRestaurant__menu">
      {Array(15)
        .fill("")
        .map((a, index) => {
          return <div className="shimmerRestaurant__menuCard" key={index}></div>;
        })}
    </div>
  );
};

export default ShimmerRestaurantMenu;
