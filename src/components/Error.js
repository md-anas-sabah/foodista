import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/2198px-Error.svg.png"
        alt="error"
      />
      <h1> {err.status + " " + err.statusText + " !!"} </h1>
    </div>
  );
};

export default Error;
