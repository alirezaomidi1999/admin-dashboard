"use client";
import React from "react";
import { InfoCard } from "@/types/types";
import Image from "next/image";
export default function InfoCard({
  title,
  itemCount,
  Visual,
  changePercentage,
  comparisonPeriod,
}: InfoCard) {
  const isPositive = changePercentage > 0;
  return (
    <div className="flex flex-col grow w-[300px] min-h-[170px] p-4 justify-between rounded-lg bg-white">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-3">
          <p className="mt-4 font-semibold text-gray-600">{title}</p>
          <p className="font-bold text-2xl text-[#202224]">{itemCount}</p>
        </div>
        <div className="flex items-center  w-16 h-16 rounded-full">
          {typeof Visual === "string" ? (
            <img src={Visual} alt={title} className="w-12 h-12 object-cover" />
          ) : Visual ? (
            <Visual className="w-12 h-12 text-blue-500" />
          ) : null}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          src={`/images/${
            isPositive ? "Ascending-Chart" : "Descending-Chart"
          }.png`}
          width={20}
          height={6}
          alt="trend"
        />
        <p className="text-[#606060]">
          <span
            className={`${isPositive ? "text-green-600" : "text-red-600"}`}
          >{`${Math.abs(changePercentage)}%`}</span>{" "}
          {`${isPositive ? "Up" : "Down"} from ${comparisonPeriod}`}
        </p>
      </div>
    </div>
  );
}
