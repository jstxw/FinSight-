import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-md shadow-md p-3">
        <p className="text-sm text-gray-700 font-medium">{payload[0].name}</p>
        <p className="text-sm text-gray-600">
          Amount:{" "}
          <span className="font-semibold text-blue-600">
            ${payload[0].value}
          </span>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
