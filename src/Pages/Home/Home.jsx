import React from "react";
import HeaderPa from "../../Components/HeaderPanel/HeaderPa";
import Asid from "../../Components/Aside/Asid";
import HeNameBa from "../../Components/HeaderNameAndBack/HeNameBa";
import HeadSerch from "../../Components/HeaderSerching/HeadSerch";
import Nemodarr from "../../Components/NmedarAmar/Nemodarr";

function Home() {
  return (
    <>
      <div className="pl-3 flex w-full">
        <div className="min-h-screen 	bg-[#111629] w-[15%]">
          <Asid />
        </div>
        <div className="w-[85%] pl-3 pr-3">
          <HeaderPa />
          <div className="mt-10">
            <HeNameBa />
          </div>
          <div>
            <HeadSerch />
          </div>
          <div>
            <Nemodarr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
