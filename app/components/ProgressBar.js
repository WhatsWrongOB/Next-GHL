'use client';

import React from 'react';

const ProgressBar = ({ step }) => {
  const percentage = step > 0 ? step * 20 : 0; // Ensure initially it's 0%

  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5">
      <div
        className="h-2.5  transition-all duration-300"
        style={{ width: `${percentage}%`,backgroundColor:"#FFA500" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
