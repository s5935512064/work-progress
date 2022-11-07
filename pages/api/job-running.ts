import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

const job_running = [
  {
    id: 1,
    src: "/assets/branch_logo/All Logo_SSD-07.png",
    title: "sindhorn lunpini website (frontend)",
    status: ["running", "onplan"],
    href: "#",
    status_job: "อยู่ในระหว่างการดีไซน์",
    issue: "-",
    respinsibility: "ณัฐวุฒิ ทิพย์ประเสริฐ (IT) + พี่โม (กราฟฟิค)",
    update_date: "07 November 2022",
    deadline: "30 November 2022",
    start_date: "07 November 2022",
  },
  {
    id: 2,
    src: "/assets/branch_logo/OSP-Logo.png",
    title: "the old siam website (frontend)",
    status: ["onplan", "delayed"],
    href: "https://theoldsiam-2022-com.vercel.app/",
    status_job:
      "ทำการขึ้นดีไซน์เรียบร้อยแล้ว ส่งให้ทางดิโอลด์สยามตรวจสอบ พร้อมทั้งเตรียม source file ให้เพื่อทำการพัฒนาต่อ",
    issue: "รอ feedback",
    respinsibility: "พี่อร (OSP)",
    update_date: "07 November 2022",
    deadline: "01 October 2022",
    start_date: "30 July 2022",
  },
  {
    id: 3,
    src: "/assets/branch_logo/All Logo_SSD-01.png",
    title: "siam sindhorn official (frontend)",
    status: ["onplan", "delayed"],
    href: "https://siamsindhorn.com",
    status_job:
      "ทำการขึ้นดีไซน์เรียบร้อยแล้ว ส่งให้ทางการตลาดปรับดีไซน์เพิ่มเติม พร้อมทั้งเตรียม source file ให้เพื่อทำการพัฒนาต่อ",
    issue: "รอรวบรวม content และ source file",
    respinsibility: "พี่กบ + พี่โม (MKT) + เต้ย (IT)",
    update_date: "07 November 2022",
    deadline: "01 November 2022",
    start_date: "1 July 2022",
  },

  {
    id: 4,
    src: "/assets/branch_logo/All Logo_SSD-19.png",
    title: "CMS Velaa (backend)",
    status: ["overplan"],
    href: "#",
    status_job:
      "ทำการเชื่อมต่อข้อมูลหลังบ้านและวาง function การทำงานภาพรวมเสร็จแล้ว รอการพัฒนาต่อไป",
    issue: "พักไว้อยู่",
    respinsibility: "เต้ย (IT)",
    update_date: "07 November 2022",
    deadline: "-",
    start_date: "1 September 2022",
  },
  {
    id: 5,
    src: "/assets/branch_logo/All Logo_SSD-13.png",
    title: "Residence at Sindhorn Kempinski (frontend)",
    status: ["onplan", "delayed"],
    href: "https://kempinskiv2-com.vercel.app/",
    status_job:
      "ทำการขึ้นดีไซน์เรียบร้อยแล้ว ส่งให้ทางการตลาดปรับดีไซน์เพิ่มเติม พร้อมทั้งเตรียม source file ให้เพื่อทำการพัฒนาต่อ",
    issue: "รอรวบรวม content และ source file",
    respinsibility: "พี่กบ + พี่โม (MKT) + เต้ย (IT)",
    update_date: "07 November 2022",
    deadline: "30 August 2022",
    start_date: "1 May 2022",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(job_running);
  }
}
