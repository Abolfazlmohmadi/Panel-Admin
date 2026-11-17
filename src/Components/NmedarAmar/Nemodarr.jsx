import React, { useState } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import Dropdown from "../NmedarAmar/Dropdown";

// اطلاعات نمودار فروش
const salesData = [
  { day: "شنبه", sales: 30000000 },
  { day: "یکشنبه", sales: 80000000 },
  { day: "دوشنبه", sales: 100000000 },
  { day: "سه‌شنبه", sales: 135000000 },
  { day: "چهارشنبه", sales: 90000000 },
  { day: "پنجشنبه", sales: 135000000 },
  { day: "جمعه", sales: 135000000 },
];

// اطلاعات وضعیت سفارش‌ها
const orderData = [
  { name: "در حال پردازش", value: 45, color: "#258BFF" },
  { name: "ارسال شده", value: 35, color: "#10C99A" },
  { name: "تحویل شده", value: 20, color: "#914BFF" },
];

// گزینه‌های Dropdown
const periodOptions = [
  { label: "۷ روز اخیر", value: "7days" },
  { label: "۳۰ روز اخیر", value: "30days" },
  { label: "۱۲ ماه اخیر", value: "12months" },
];

// فرمت قیمت
const formatPrice = (value) => new Intl.NumberFormat("fa-IR").format(value);

// Tooltip نمودار فروش
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#17172d] border border-purple-500/40 rounded-xl px-4 py-3 shadow-xl">
        <p className="text-white text-sm font-bold">
          {formatPrice(payload[0].value)} تومان
        </p>
      </div>
    );
  }

  return null;
}

// نمودار فروش
function SalesChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("7days");

  return (
    <div
      dir="rtl"
      className="w-full rounded-2xl bg-[#151A2E] border border-[#292942] p-5"
    >
      <div className="flex justify-between items-center mb-6.5">
        <h2 className="text-white font-bold text-base">
          آمار فروش در ۷ روز گذشته
        </h2>

        {/* Dropdown اختصاصی */}
        <Dropdown
          options={periodOptions}
          value={selectedPeriod}
          onChange={setSelectedPeriod}
          placeholder="انتخاب بازه"
          className="w-[135px]"
        />
      </div>

      <div className="w-full h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesData}
            margin={{
              top: 15,
              right: 10,
              left: 5,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#292940" />

            <XAxis
              dataKey="day"
              stroke="#A1A1B5"
              tick={{ fill: "#C4C4D5", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />

            <YAxis
              orientation="left"
              domain={[0, 150000000]}
              ticks={[0, 50000000, 100000000, 150000000]}
              tickFormatter={(value) =>
                value === 0 ? "۰" : `${value / 1000000}M`
              }
              stroke="#A1A1B5"
              tick={{ fill: "#C4C4D5", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={45}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#8B5CF6",
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#874BFF"
              strokeWidth={3}
              fill="url(#salesGradient)"
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#874BFF",
                strokeWidth: 3,
              }}
              activeDot={{
                r: 6,
                fill: "#fff",
                stroke: "#874BFF",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Tooltip نمودار سفارش‌ها
function OrderTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#151A2E] border border-purple-500/40 rounded-xl px-3 py-2 shadow-xl">
        <p className="text-white text-sm">{payload[0].name}</p>

        <p className="text-purple-400 text-sm font-bold">{payload[0].value}٪</p>
      </div>
    );
  }

  return null;
}

// نمودار وضعیت سفارش‌ها
function OrderStatusChart() {
  return (
    <div
      dir="rtl"
      className="w-full h-full rounded-2xl bg-[#151A2E] border border-[#292942] p-5"
    >
      <h2 className="text-white font-bold text-base mb-4">وضعیت سفارش‌ها</h2>

      <div className="flex flex-col items-center gap-4">
        {/* نمودار حلقه‌ای */}
        <div className="relative w-full h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={orderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={43}
                outerRadius={72}
                paddingAngle={1}
                stroke="none"
              >
                {orderData.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>

              <Tooltip content={<OrderTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          {/* متن وسط نمودار */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-white text-xl font-bold">۳٬۷۴۲</span>

            <span className="text-gray-300 text-xs">سفارش</span>
          </div>
        </div>

        {/* راهنمای رنگ‌ها */}
        <div className="w-full flex flex-col gap-4">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-gray-300 text-xs whitespace-nowrap">
                  {item.name}
                </span>
              </div>

              <span className="text-gray-300 text-xs font-medium">
                {item.value}٪
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// کامپوننت اصلی
function Nemodarr() {
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-10 w-full mb-5">
      {/* ستون سمت چپ */}
      <div className="w-full md:w-[30%]">
        <OrderStatusChart />
      </div>

      {/* ستون سمت راست */}
      <div className="w-full md:w-[70%]">
        <SalesChart />
      </div>
    </div>
  );
}

export default Nemodarr;
