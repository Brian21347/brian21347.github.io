import React from "react";

const SectionContainer = (props: { id: string, children: any }) => {
  return (
    <div id={props.id} className="relative bg-slate-0 h-full pt-[62px]">
      <div className="relative p-5 sm:w-[75%] lg:w-[50%] m-auto">
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
