"use client";

import { HTMLAttributes } from "react";
import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { AreaChart as AreaRechart } from "recharts";

interface AreaChartProps extends HTMLAttributes<HTMLDivElement> {
  data: Record<string, unknown>[];
  index: string;
  categories: string[];
}

export const AreaChart = ({ data, index, categories }: AreaChartProps) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaRechart width={500} height={400} data={data}>
          {categories.map((category) => (
            <defs key={category}>
              <linearGradient
                key={category}
                id={`gradient-${category}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
                className="fill-blue-500"
              >
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
          ))}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={index}
            className="text-xs fill-gray-500 dark:fill-gray-500"
          />
          <YAxis className="text-xs fill-gray-500 dark:fill-gray-500" />
          {categories.map((category) => (
            <Area
              key={category}
              type="monotone"
              dataKey={category}
              stroke="#3b82f6"
              strokeWidth={2}
              fill={`url(#gradient-${category})`}
            />
          ))}
        </AreaRechart>
      </ResponsiveContainer>
    </div>
  );
};
