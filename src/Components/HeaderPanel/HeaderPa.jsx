import React from "react";
import { Search, Bell, Sun } from "lucide-react";
import img from "../../Image/images.webp";

function HeaderPa() {
  return (
    <div className="w-full flex justify-between items-center mt-5">
      {/* فرم جستجو */}
      <div className="relative">
        <Search
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none"
        />

        <input
          type="text"
          placeholder="جستجو در بخش‌ها ..."
          className="w-112.5 bg-[#151A2E] text-[#F8FAFC] placeholder:text-[#94A3B8] border border-[#252B45] rounded-xl py-3 pr-11 pl-3 outline-none focus:border-[#7C3AED] transition"
        />
      </div>

      {/* ابزارهای هدر */}
      <div className="flex gap-3 items-center">
        {/* تغییر تم */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-[#CBD5E1] transition hover:bg-[#22203D]">
          <Sun size={21} strokeWidth={2} />
        </button>

        {/* اعلان‌ها */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#17172D] text-[#A78BFA] shadow-[0_0_15px_rgba(139,92,246,0.15)] transition hover:bg-[#22203D]">
          <Bell size={21} strokeWidth={2.2} />

          <span className="absolute -right-1 -top-1 flex h-4.25 min-w-4.25 items-center justify-center rounded-full bg-[#F43F5E] px-1 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* جداکننده */}
        <div className="w-8 h-px bg-[#64748ba9] rotate-90"></div>

        {/* اطلاعات کاربر */}
        <div className="flex items-center gap-5">
          <div>
            <p className="text-[#F8FAFC]">علی</p>
            <p className="text-[#CBD5E1]">مدیر سیستم</p>
          </div>

          <div>
            <img
              src={img}
              alt="تصویر پروفایل"
              className="w-12 h-12 rounded-full object-cover border border-[#7C3AED]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPa;
