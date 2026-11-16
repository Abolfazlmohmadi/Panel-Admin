import React from "react";
import AmarWeb from "../../Data/AmarWeb";

function HeadSerch() {
  const colors = {
    purple: {
      percent: "text-purple-400",
      percentBg: "bg-purple-500/15",
      iconBg: "bg-purple-500/15",
      icon: "text-purple-400",
    },
    green: {
      percent: "text-green-400",
      percentBg: "bg-green-500/15",
      iconBg: "bg-green-500/15",
      icon: "text-green-400",
    },
    orange: {
      percent: "text-orange-400",
      percentBg: "bg-orange-500/15",
      iconBg: "bg-orange-500/15",
      icon: "text-orange-400",
    },
    blue: {
      percent: "text-blue-400",
      percentBg: "bg-blue-500/15",
      iconBg: "bg-blue-500/15",
      icon: "text-blue-400",
    },
  };

  return (
    <div className="flex flex-wrap gap-4 mt-5 justify-center">
      {AmarWeb.map((item) => {
        const Icon = item.icon;
        const color = colors[item.color] || colors.purple;

        return (
          <div
            key={item.id}
            className="w-70 p-4 rounded-2xl shadow-md bg-[#151A2E] border border-[#3333]"
          >
            <div className="flex justify-between items-center">
              <div className={`${color.percentBg} px-3 py-1 rounded-lg`}>
                <p className={`${color.percent} text-sm font-semibold`}>
                  {item.percent}
                </p>
              </div>
              <div className={`${color.iconBg} p-3 rounded-xl`}>
                <Icon size={24} className={color.icon} />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-slate-500">{item.title}</h2>

              <p className="text-white font-bold text-xl mt-2">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeadSerch;
