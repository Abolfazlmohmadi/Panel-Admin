import React from "react";
import menuItems from "../../Data/ListPa";
import { NavLink } from "react-router";
import { LogOut } from "lucide-react";

function Asid() {
  return (
    <>
      <div className="p-2">
        <p className="text-white text-2xl font-bold mt-8 text-center">
          پنل مدیریت
        </p>

        <div className="mt-8 flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-l from-purple-700 to-purple-600 text-white shadow-lg shadow-purple-900/30"
                      : "text-gray-400 hover:bg-[#3B2897] hover:text-white"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon size={19} />
                  <span>{item.title}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="w-full h-px mt-5 bg-[#64748ba9] rotate-180"></div>
        <div className="w-full">
          <button className="flex w-full gap-4 text-white mt-6 bg-[#1A1A37] rounded-xl p-3">
            <LogOut />
            <p>خروج از حساب کاربری</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Asid;
