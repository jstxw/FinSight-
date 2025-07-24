import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvater = ({
  fullName = "?",
  width = "w-12",
  height = "h-12",
  style = "",
}) => {
  return (
    <div
      className={`${width} aspect-square ${style} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100 text-xl overflow-hidden`}
    >
      {getInitials(fullName)}
    </div>
  );
};

export default CharAvater;
