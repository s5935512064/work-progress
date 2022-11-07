import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import React, { useCallback, useEffect, useRef, useState } from "react";

import RunningJob from "../components/RunningJob";
import CompleteJob from "../components/CompleteJob";
import NoRunJob from "../components/NoRunJob";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const a_type_plan = [
  {
    id: 1,
    src: "/assets/business_chart.jpeg",
    thumb: "/assets/business_chart.jpeg",
  },
];

export default function Home() {
  const lightGallery = useRef<any>(null);

  const openGallery = useCallback(() => {
    lightGallery.current.openGallery();
  }, []);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>SSD-JOB REVIEW</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        id="overall"
        className="w-full flex justify-center px-4 md:px-10 py-10 pb-40"
      >
        <div className="max-w-[1440px] w-full min-h-[500px] flex flex-col gap-4">
          <div className="w-full justify-between flex flex-col md:flex-row gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold inline-flex gap-2 items-center">
                JOB PROGRESS
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9 -translate-y-[2px]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                  </svg>
                </span>
              </h1>

              <p className=" text-slate-500/75  text-xs md:text-sm">
                Last Update : 07 November 2022
              </p>
            </div>

            <div className="">
              <LightGallery
                // onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                <a
                  title="business_chart"
                  aria-label="business_chart"
                  href="/assets/business_chart.jpeg"
                >
                  <button
                    type="button"
                    className="md:px-4 py-2 ring-0 outline-none focus:outline-none focus:ring-0 hover:scale-110 duration-300 text-sm text-red-500 inline-flex items-center gap-2 "
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 -mt-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    VIEW BUSINESS CHART
                  </button>
                </a>
              </LightGallery>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 h-fit">
            <div className="w-full h-full shadow-sm bg-white rounded-2xl overflow-hidden p-5">
              <p className="font-bold">WEBSITE</p>

              <div className="w-full  flex flex-col mt-2">
                <p className="text-sm uppercase font-medium">
                  #2022 - 2023 (Frontend Plan)
                </p>

                <div className="flex flex-col gap-1 w-full text-sm mt-2 px-2 md:px-5">
                  <ul>
                    <li className="grid grid-cols-4 gap-4 ">
                      <p className="col-span-2">1. งานทั้งหมด</p>

                      <p className="">13 โปรเจค</p>

                      <p className="font-bold text-right">100%</p>
                    </li>
                    <li className="grid grid-cols-4 gap-4">
                      <p className="col-span-2">2. งานที่สำเร็จแล้ว</p>

                      <p className=" ">4 โปรเจค</p>
                      <p className="font-bold text-right">30%</p>
                    </li>
                    <li className="grid grid-cols-4 gap-4">
                      <p className="col-span-2">3. งานที่กำลังทำ</p>

                      <p className="">5 โปรเจค</p>
                      <p className="font-bold text-right">40%</p>
                    </li>
                    <li className="grid grid-cols-4 gap-4">
                      <p className="col-span-2">4. งานที่ยังไม่เริ่ม</p>

                      <p className="">4 โปรเจค</p>

                      <p className="font-bold text-right">30%</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex flex-col mt-2">
                <p className="text-sm uppercase font-medium">
                  #2023 (Backend Plan)
                </p>

                <div className="flex flex-col gap-1 w-full text-sm mt-2 px-2 md:px-5">
                  <ul>
                    <li className="grid grid-cols-4 gap-4">
                      <p className="col-span-2">1. งานทั้งหมด</p>

                      <p className="">13 โปรเจค</p>

                      <p className="font-bold text-right">100%</p>
                    </li>
                    <li className="grid grid-cols-4 gap-4">
                      <p className="col-span-2 ">2. งานที่สำเร็จแล้ว</p>

                      <p className=" ">0 โปรเจค</p>
                      <p className="font-bold text-right">0%</p>
                    </li>
                    <li className="grid grid-cols-4 gap-4">
                      <p className="col-span-2">3. งานที่กำลังทำ</p>

                      <p className="">1 โปรเจค</p>
                      <p className="font-bold text-right">7%</p>
                    </li>
                    <li className="grid grid-cols-4 gap-4">
                      <p className="col-span-2">4. งานที่ยังไม่เริ่ม</p>

                      <p className="">12 โปรเจค</p>

                      <p className="font-bold text-right">93%</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-full shadow-sm bg-white rounded-2xl overflow-hidden p-5">
              <p className="font-bold">SUPPORT</p>
              <div className="w-full  flex flex-col mt-2">
                <div className="flex flex-col gap-1 w-full text-sm mt-2 px-5">
                  <ul>
                    <li className="">
                      <p>1. พัฒนาระบบจอโฆษณา @Velaa </p>
                    </li>
                    <li className="">
                      <p>2. พัฒนาระบบคูปอง Privillage @Velaa </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold  relative w-fit bg-green-200 px-5 py-1 rounded-md">
              <div className="absolute -top-[2px] -right-1">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>

              <p className="text-green-800 tracking-wide">RUNNING</p>
            </div>

            <RunningJob />
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold  relative w-fit bg-yellow-200 px-5 py-1 rounded-md">
              <div className="absolute -top-[2px] -right-1">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
              </div>

              <p className="text-yellow-800 tracking-wide">COMPLETED</p>
            </div>

            <CompleteJob />
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold  relative w-fit bg-gray-200 px-5 py-1 rounded-md">
              <p className="text-gray-800 tracking-wide">NO RUN</p>
            </div>

            <NoRunJob />
          </div>
        </div>
      </section>
    </Layout>
  );
}
