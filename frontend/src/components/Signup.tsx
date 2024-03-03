import React from "react";
import Quotes from "./Quotes";
import Auth from "./Auth";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signup"></Auth>
      </div>
      <div className="invisible lg:visible">
        <Quotes></Quotes>
      </div>
    </div>
  );
};

export default Signup;
