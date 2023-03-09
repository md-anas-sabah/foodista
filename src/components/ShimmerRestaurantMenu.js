import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const ShimmerRestaurantMenu = () => {
  return (
    <div className="shimmerRestaurant__menu">
      {Array(15)
        .fill("")
        .map((a, index) => {
          return <div className="shimmerRestaurant__menuCard animate-pulse rounded-lg" key={index}></div>;
        })}
    </div>
    // <div className="flex flex-wrap gap-3 px-10">
    //   {Array(12)
    //     .fill("")
    //     .map((index) => {
    //       return (
    //         <div className="">
    //           <ShimmerRestaurantCard key={index} />;
    //         </div>
    //       );
    //     })}
    // </div>
  );
};

export default ShimmerRestaurantMenu;
