import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const Shimmer = () => {
  return (
    // <div className="shimmer">
    //   {Array(15)
    //     .fill("")
    //     .map((a, index) => {
    //         return <div className="shimmer-card" key={index}></div>;
    //     })}
    // </div>
     <div className="grid grid-cols-4  max-w-7xl mx-auto gap-4 ">
      {Array(12)
        .fill("")
        .map((index) => {
          return (
            <div className="">
              <ShimmerRestaurantCard key={index} />
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;


