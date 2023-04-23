"use client";
import Link from "next/link";
import { FcClock, FcHome, FcExport } from "react-icons/fc";
import { GrMapLocation, GrTools } from "react-icons/gr";

function Navigation() {
  const routes = [
    { name: "Dashboard", path: "/" },
    { name: "Location", path: "/location" },
    { name: "Timekeeping", path: "/logs" },
    { name: "Workers", path: "/workers" },
  ];

  return (
    <div className="flex flex-col gap-5 justify-between items-center w-fit pt-8 pb-2 min-h-screen shadow-lg">
      <ul className="w-full flex flex-col font-semibold">
        <Link
          href={routes[0].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <FcHome className="p-1 border rounded-lg w-8 h-8" />
          <span>Dashboard</span>
        </Link>
        <Link
          href={routes[1].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <GrMapLocation className="p-1 border rounded-lg w-8 h-8" />
          <span>Location</span>
        </Link>
        <Link
          href={routes[2].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <FcClock className="p-1 border rounded-lg w-8 h-8" />
          <span>Logs</span>
        </Link>
        <Link
          href={routes[3].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <GrTools className="p-1 border rounded-lg w-8 h-8" />
          <span>Workers</span>
        </Link>
      </ul>
      <ul className="w-full font-semibold">
        <li className="flex items-center gap-2 px-5 py-3">
          <FcExport className="p-1 border rounded-lg w-8 h-8" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
