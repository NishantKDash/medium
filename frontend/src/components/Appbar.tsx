import { Link, useLocation } from "react-router-dom";
const Appbar = () => {
  const location = useLocation();
  return (
    <div className="border-b flex justify-between px-10 py-4 mx-2">
      <div className="flex justify-center items-center ">
        <Link to={"/blogs"}>
          <div className="font-bold text-lg cursor-pointer">Medium</div>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        {location.pathname != "/publish" && (
          <Link to={"/publish"}>
            <div className="mr-10 text-4xl pb-2 font-thin text-slate-600 cursor-pointer flex justify-center items-center">
              +
            </div>
          </Link>
        )}
        <div className="rounded-full bg-black flex justify-center items-center">
          <p className="font-semibold text-white px-2 py-0.5">N</p>
        </div>
        <div className="ml-2 flex justify-center items-center">Logout</div>
      </div>
    </div>
  );
};

export default Appbar;
