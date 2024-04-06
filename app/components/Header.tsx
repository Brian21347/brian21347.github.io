import React from "react";

const Header = (props: {name: string}) => {
  return (
    <div className="flex items-center mb-10">
      <div className="flex-1 border-t-2 border-slate-3 border-dotted"></div>
      <span className="px-3 text-text-0 text-m font-bold">{props.name}</span>
      <div className="flex-1 border-t-2 border-slate-3 border-dotted"></div>
    </div>
  );
};

export default Header;
