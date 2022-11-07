import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Footer: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="w-full flex justify-center px-4 md:px-10 h-16 relative items-center">
        <div className="max-w-[1440px] w-full flex justify-center items-center">
          <p className="text-xs sm:text-sm text-center">
            Copyright © 2022Siam Sindhorn Co., Ltd.All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
