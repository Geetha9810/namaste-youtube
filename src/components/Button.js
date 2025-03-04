import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 m-2 bg-gray-100 rounded-lg on hover:bg-slate-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
