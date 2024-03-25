// import React from "react";

interface Props {
  children: string;
}
const NamesList = (props: Props) => {
  const { children } = props;
  return (
    <li
      key={children}
      className="text-sm w-fit p-[2px] bg-white rounded-sm cursor-pointer grow border border-gray-100"
    >
      <div
        className="flex gap-2 flex-1
hover:bg-gray-50 text-[13px] text-gray-700
 p-1 w-full rounded-sm transition duration-200
"
      >
        {children}
      </div>
    </li>
  );
};

export default NamesList;