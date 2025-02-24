"use client";

import React from "react";

interface DealerCardProps {
  title1: string;
  title2: string;
  count: string;
}

const DealerCard: React.FC<DealerCardProps> = ({
  title1,
  title2,
  count,
}) => {
  return (
    <div className="w-1/2 h-40 rounded-lg bg-[#F7F9FC] m-3">
      <div className="flex justify-between items-center p-4">
        <p className="text-[#615E83] text-base font-semibold">
          {title1}
          <br />
          {title2}
        </p>

      </div>
      <p className="p-4 text-4xl text-black font-bold">{count}</p>
    </div>
  );
};

export default DealerCard;
