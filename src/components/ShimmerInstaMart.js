const ShimmerInstaMart = () => {
  return  (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center items-end gap-4 h-52 bg-gray-400 w-9/12 rounded-b-full p-10">
        <div className="flex items-center bg-gray-400 w-9/12 border rounded-lg overflow-hidden"></div>
      </div>
      <div className="flex flex-row w-full mt-10 bg-gray-400 ">
        <div className="flex flex-wrap m-10 bg-gray-400 place-content-evenly w-8/12 border rounded-lg overflow-hidden">
          {Array(15)
            .fill("")
            .map((a, index) => {
              return (
                <div
                  className="w-60 h-60 bg-gray-400 m-20 border"
                  key={index}
                ></div>
              );
            })}
        </div>
        <div className="flex w-96 rounded-lg flex-col bg-gray-400  m-10 p-10 border h-screen  "></div>
      </div>
    </div>
  );
};
export default ShimmerInstaMart;
