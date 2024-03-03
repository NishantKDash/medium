import React from "react";
import Auth from "./Auth";
import Quotes from "./Quotes";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signin"></Auth>
      </div>
      <div className="hidden lg:block">
        <Quotes></Quotes>
      </div>
    </div>
  );
};

export default Signin;
