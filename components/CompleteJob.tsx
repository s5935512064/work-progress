import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import useSWR, { mutate } from "swr";
import axios from "axios";
import Link from "next/link";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const URL = process.env.NEXT_PUBLIC_API_URL + `api/job-complete`;
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const CompleteJob: FC<Props> = (): JSX.Element => {
  const { data: job_complete, error: function_error } = useSWR(URL, fetcher);

  useEffect(() => {
    console.log(job_complete);
  });

  if (!job_complete) {
    return <div> Loading...</div>;
  }

  const Delayed = () => {
    return (
      <span className="w-fit h-6 bg-red-400 rounded-md text-xs text-center font-medium text-white px-3 py-1">
        #DELAYED
      </span>
    );
  };

  const Running = () => {
    return (
      <span className="w-fit h-6 bg-green-300 rounded-md text-xs text-center font-medium text-green-700 px-3 py-1">
        RUNNING
      </span>
    );
  };

  const Onplan = () => {
    return (
      <span className="w-fit h-6 bg-yellow-300 rounded-md text-xs text-center font-medium text-yellow-700 px-3 py-1">
        #ON PLAN
      </span>
    );
  };

  const Overplan = () => {
    return (
      <span className="w-fit h-6 bg-blue-300 rounded-md text-xs text-center font-medium text-blue-700 px-3 py-1">
        #NOT ON PLAN
      </span>
    );
  };

  return (
    <>
      <div className="w-full pt-2">
        <div className="w-full flex flex-col gap-4 ">
          {job_complete.map((item: any, index: number) => (
            <div key={index}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full md:justify-between rounded-lg bg-white p-4 text-left  focus:outline-none min-h-[64px] items-center relative flex-col md:flex-row gap-4 ">
                      <div className="flex flex-col md:flex-row md:gap-7 items-center w-full md:w-fit gap-2">
                        <span className="shrink-0 w-32 h-12 relative">
                          <Image
                            src={item.src}
                            alt="sdl"
                            fill
                            style={{
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                          />
                        </span>

                        <span className="flex flex-col md:justify-center text-left w-full ">
                          <span className="text-xs uppercase">title</span>
                          <span className=" font-medium uppercase">
                            {item.title}
                          </span>
                        </span>
                      </div>

                      <div className="flex gap-4 items-center w-full  md:w-fit justify-between ">
                        <span className="flex  gap-1">
                          {item.status.map((item: string, index: number) => {
                            if (item == "onplan") return <Onplan />;
                            else if (item == "delayed") return <Delayed />;
                            else if (item == "running") return <Running />;
                            else if (item == "overplan") return <Overplan />;
                          })}
                        </span>

                        {item.href != "#" ? (
                          <Link href={item.href} passHref legacyBehavior>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="link"
                              className="uppercase md:text-xs text-slate-900 text-[10px] underline "
                            >
                              view link
                            </a>
                          </Link>
                        ) : null}

                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 `}
                        />
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 py-7 text-sm text-gray-500 bg-white -translate-y-2">
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                        <div className="flex flex-col gap-4">
                          <div className="inline-flex gap-4">
                            <p className="w-32 shrink-0 font-medium">
                              สถานะงาน
                            </p>
                            <p>{item.status_job}</p>
                          </div>

                          <div className="inline-flex gap-4">
                            <p className="w-32 shrink-0 font-medium">
                              ปัญหาที่พบเจอ
                            </p>
                            <p className="text-red-500">{item.issue}</p>
                          </div>

                          <div className="inline-flex gap-4">
                            <p className="w-32 shrink-0 font-medium">
                              ผู้รับผิดชอบ
                            </p>
                            <p>{item.respinsibility}</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="inline-flex gap-4">
                            <p className="w-32 shrink-0 font-medium">
                              อัพเดทล่าสุด
                            </p>
                            <p>{item.update_date}</p>
                          </div>

                          <div className="inline-flex gap-4">
                            <p className="w-32 shrink-0 font-medium">
                              วันที่เสร็จสิ้นงาน
                            </p>
                            <p>{item.deadline}</p>
                          </div>

                          <div className="inline-flex gap-4">
                            <p className="w-32 shrink-0 font-medium">
                              วันที่เริ่มงาน
                            </p>
                            <p>{item.start_date}</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompleteJob;
