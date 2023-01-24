const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array(15)
        .fill("")
        .map((a, index) => {
            return <div className="shimmer-card" key={index}></div>;
        })}
    </div>
  );
};

export default Shimmer;


