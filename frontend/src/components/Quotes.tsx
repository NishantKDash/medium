import React from "react";

const Quotes = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl max-w-md">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns."
        </h1>
        <h2 className="font-bold mt-2">Jules Winnfield</h2>
        <h2 className="text-sm text-slate-500">CEO, Acme Inc</h2>
      </div>
    </div>
  );
};

export default Quotes;
