import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="w-full flex justify-center h-20 px-4 md:px-10 py-2 items-center sticky top-0 shadow-sm bg-white z-30">
        <div className=" w-full h-full relative flex justify-between items-center ">
          <div className="shrink-0 w-36 md:w-48 h-full relative">
            <Image
              src="/assets/logo-ssd.png"
              alt="logo"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          <div className="flex gap-4 items-center justify-center">
            <div className="text-xs sm:text-sm text-right">
              <p className="font-bold">NATTHAWUT</p>
              <p>PROGRAMMER</p>
            </div>

            <div className="w-14 h-14 rounded-full overflow-hidden relative bg-[#ffe6a6] border ">
              <Image
                src="/assets/profile.jpg"
                alt="profile"
                fill
                style={{ objectFit: "contain" }}
                className="scale-75 hover:scale-90 duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
