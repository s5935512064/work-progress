import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

const job_norun = [
  {
    id: 1,
    src: "/assets/branch_logo/All Logo_SSD-03.png",
    title: "sindhorn village website (frontend)",
    status: ["onplan"],
    href: "https://sindhornvillage.com",
    status_job: "-",
    issue: "-",
    respinsibility: "-",
    update_date: "07 November 2022",
    deadline: "-",
    start_date: "-",
  },
  {
    id: 2,
    src: "/assets/branch_logo/building.png",
    title: "sindhorn building website (frontend)",
    status: ["onplan"],
    href: "https://sindhornbuilding.com/",
    status_job: "-",
    issue: "-",
    respinsibility: "-",
    update_date: "07 November 2022",
    deadline: "-",
    start_date: "-",
  },
  {
    id: 3,
    src: "/assets/branch_logo/Eiffel_B.png",
    title: "eiffel bakery website (frontend)",
    status: ["onplan"],
    href: "https://eiffelbakery.com/",
    status_job: "-",
    issue: "-",
    respinsibility: "-",
    update_date: "07 November 2022",
    deadline: "-",
    start_date: "-",
  },
  {
    id: 4,
    src: "/assets/branch_logo/saneajan.png",
    title: "saneh jaan website (frontend)",
    status: ["onplan"],
    href: "https://sanehjaan.com/",
    status_job: "-",
    issue: "-",
    respinsibility: "-",
    update_date: "07 November 2022",
    deadline: "-",
    start_date: "-",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(job_norun);
  }
}
