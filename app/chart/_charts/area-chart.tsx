"use client";

import { HTMLAttributes } from "react";
import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AreaChart as AreaRechart } from "recharts";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

//#region Tooltip

const valueFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString();
};

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">;

type PayloadItem = {
  category: string;
  value: number;
  index: string;
  color: string;
  type?: string;
  payload: unknown;
};

interface ChartTooltipProps {
  active: boolean | undefined;
  payload: PayloadItem[];
  label: string;
  valueFormatter: (value: number) => string;
}

const ChartTooltip = ({
  active,
  payload,
  label,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border text-sm shadow-md border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="border-b border-inherit px-4 py-2">
          <p className="font-medium text-gray-900 dark:text-gray-50">{label}</p>
        </div>
        <div className="space-y-1 px-4 py-2">
          {payload.map(({ value, category }, index) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className="h-[3px] w-3.5 shrink-0 rounded-full"
                />
                <p className="whitespace-nowrap text-right text-gray-700 dark:text-gray-300">
                  {category}
                </p>
              </div>
              <p className="whitespace-nowrap text-right font-medium tabular-numstext-gray-900 dark:text-gray-50">
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

//#region AreaChart

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
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            isAnimationActive={true}
            animationDuration={100}
            cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
            offset={20}
            position={{ y: 0 }}
            content={({ active, payload, label }) => {
              const cleanPayload: TooltipProps["payload"] = payload
                ? payload.map(
                    (item: Payload<ValueType, NameType>): PayloadItem => ({
                      category: item!.dataKey as string,
                      value: item.value as number,
                      index: item.payload[index],
                      color: "#fff",
                      type: item.type,
                      payload: item.payload,
                    })
                  )
                : [];

              return (
                <ChartTooltip
                  active={active}
                  payload={cleanPayload}
                  label={label}
                  valueFormatter={valueFormatter}
                />
              );
            }}
          />
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
