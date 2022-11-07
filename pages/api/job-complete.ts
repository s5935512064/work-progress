import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

const job_complete = [
  {
    id: 1,
    src: "/assets/branch_logo/All Logo_SSD-09.png",
    title: "sindhorn tonson website (frontend)",
    status: [""],
    href: "https://sindhorntonson.com/",
    status_job: "เรียบร้อย รออัพเดทการดีไซน์ V2 ในอนาคต",
    issue: "-",
    respinsibility:
      "เต้ย (IT) + พี่ภู (ตรวจสอบ) + พี่กบ + พี่โม (ตรวจสอบเนื้อหา content)",
    update_date: "07 November 2022",
    deadline: "30 November 2022",
    start_date: "20 October 2022",
  },
  {
    id: 2,
    src: "/assets/branch_logo/All Logo_SSD-11.png",
    title: "baan sindhorn website (frontend)",
    status: [""],
    href: "https://baansindhorn.com/",
    status_job: "เรียบร้อย รออัพเดทการดีไซน์ V2 ในอนาคต",
    issue: "รอพัฒนาระบบหลังบ้าน",
    respinsibility:
      "เต้ย (IT) + พี่ภู (ตรวจสอบ) + พี่กบ + พี่โม (ตรวจสอบเนื้อหา content)",
    update_date: "07 November 2022",
    deadline: "1 July 2022",
    start_date: "1 May 2022",
  },
  {
    id: 3,
    src: "/assets/branch_logo/All Logo_SSD-19.png",
    title: "velaa @langsuan landing page (frontend)",
    status: [""],
    href: "https://velaalangsuan.com/",
    status_job: "เรียบร้อย รออัพเดทการดีไซน์ V2 เพื่อปรับเป็นเว็บไซต์ ในอนาคต",
    issue: "-",
    respinsibility:
      "เต้ย (IT) + พี่ภู (ตรวจสอบ) + พี่กบ + พี่โม + พี่ปัน (ตรวจสอบเนื้อหา content)",
    update_date: "07 November 2022",
    deadline: "1 September 2022",
    start_date: "1 July 2022",
  },

  {
    id: 4,
    src: "/assets/branch_logo/logo.png",
    title: "Polo Football Park website (frontend)",
    status: [""],
    href: "https://polofootballpark.com/",
    status_job: "เรียบร้อย รออัพเดทการดีไซน์ V2 เพื่อปรับเป็นเว็บไซต์ ในอนาคต",
    issue: "รอพัฒนาระบบหลังบ้าน",
    respinsibility: "เต้ย (IT) + พี่ภู (ตรวจสอบ)",
    update_date: "07 November 2022",
    deadline: "30 June 2022",
    start_date: "1 April 2022",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(job_complete);
  }
}
