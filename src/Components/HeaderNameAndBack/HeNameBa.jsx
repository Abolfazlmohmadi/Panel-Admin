import React from "react";

function HeNameBa() {
  return (
    <div dir="rtl" className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-[#171730] flex items-center justify-between px-8 min-h-[150px]">
        {/* لکه‌های نورانی بنفش در پس‌زمینه */}
        <div className="pointer-events-none absolute -left-24 -bottom-28 w-[460px] h-[320px] rounded-full bg-[#6d28d9] opacity-50 blur-3xl" />

        <div className="pointer-events-none absolute left-1/3 -top-32 w-[560px] h-[300px] rounded-full bg-[#4c1d95] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute right-1/4 top-1/2 w-[300px] h-[200px] rounded-full bg-[#312e81] opacity-40 blur-3xl" />

        {/* متن خوش‌آمدگویی */}
        <div className="relative z-10 text-right">
          <h2 className="text-2xl font-bold text-white leading-snug">
            سلام ابولفضل جان <span className="inline-block">👋</span>
          </h2>

          <p className="mt-2 text-sm text-[#CBD5E1]">
            به پنل مدیریت نوین استور خوش آمدید!
          </p>
        </div>

        {/* تصویرسازی سه‌بعدی */}
        <div className="relative z-10 shrink-0">
          <svg
            width="340"
            height="150"
            viewBox="0 0 340 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="bagGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>

              <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>

              <linearGradient id="laptopScreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#24244a" />
                <stop offset="100%" stopColor="#181830" />
              </linearGradient>
            </defs>

            {/* لپ‌تاپ */}
            <g transform="rotate(-12 75 80)">
              <rect
                x="18"
                y="28"
                width="125"
                height="78"
                rx="10"
                fill="url(#laptopScreen)"
                stroke="#312e5f"
                strokeWidth="2"
              />

              <path
                d="M82 44 L62 72 L76 72 L72 94 L94 62 L80 62 Z"
                fill="#a78bfa"
              />

              <path d="M10 106 L150 106 L162 118 L-2 118 Z" fill="#2d2d5a" />

              <rect
                x="-2"
                y="116"
                width="164"
                height="4"
                rx="2"
                fill="#3a3a66"
              />
            </g>

            {/* کیف خرید */}
            <g transform="translate(130 22)">
              <path
                d="M26 22 Q26 4 42 4 Q58 4 58 22"
                stroke="#c4b5fd"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M64 22 Q64 10 74 10 Q84 10 84 22"
                stroke="#c4b5fd"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />

              <rect
                x="6"
                y="20"
                width="88"
                height="88"
                rx="14"
                fill="url(#bagGrad)"
              />

              <rect
                x="12"
                y="26"
                width="16"
                height="76"
                rx="6"
                fill="white"
                opacity="0.2"
              />

              <circle cx="50" cy="58" r="15" fill="white" opacity="0.92" />

              <path d="M43 54 L50 47 L57 54 L57 61 L43 61 Z" fill="#6d28d9" />

              <rect x="47" y="50" width="6" height="11" rx="1" fill="#6d28d9" />
            </g>

            {/* کارت نمودار */}
            <g transform="translate(232 55)">
              <rect
                x="0"
                y="0"
                width="76"
                height="60"
                rx="12"
                fill="url(#cardGrad)"
              />

              <rect
                x="0"
                y="0"
                width="76"
                height="60"
                rx="12"
                fill="white"
                opacity="0.06"
              />

              <rect
                x="14"
                y="36"
                width="11"
                height="14"
                rx="2.5"
                fill="white"
                opacity="0.95"
              />

              <rect
                x="33"
                y="26"
                width="11"
                height="24"
                rx="2.5"
                fill="white"
                opacity="0.95"
              />

              <rect
                x="52"
                y="16"
                width="11"
                height="34"
                rx="2.5"
                fill="white"
                opacity="0.95"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeNameBa;
