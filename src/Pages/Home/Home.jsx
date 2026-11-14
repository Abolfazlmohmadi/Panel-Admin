import React from "react";
import HeaderPa from "../../Components/HeaderPanel/HeaderPa";
import Asid from "../../Components/Aside/Asid";

function Home() {
  return (
    <>
      <div className="pl-3 flex w-full">
        <div className="min-h-screen 	bg-[#111629] w-[15%]">
          <Asid />
        </div>
        <div className="w-[85%]">
          <HeaderPa />
        </div>
      </div>
    </>
  );
}

export default Home;
