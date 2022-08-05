import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="px-7 h-14 border-2 font-medium bg-[#FFD3EC] border-black relative after:transition-transform hover:after:translate-x-0 hover:after:translate-y-0 rounded-lg after:absolute after:h-full after:translate-x-2 after:translate-y-2 after:left-0 after:top-0 after:w-full after:bg-black after:rounded-lg after:-z-10">
      {children}
    </button>
  );
};

export default Button;
