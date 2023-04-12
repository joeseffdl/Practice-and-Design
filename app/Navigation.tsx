"use client";
import Link from "next/link";
import { FcClock, FcHome, FcExport } from "react-icons/fc";
import { GrMapLocation, GrTools } from "react-icons/gr";

function Navigation() {
  const routes = [
    { name: "Home", path: "/home" },
    { name: "Location", path: "/location" },
    { name: "Timekeeping", path: "/timekeeping" },
    { name: "Workers", path: "/workers" },
  ];

  return (
    <div className="flex flex-col gap-5 justify-between items-center w-96 py-8 border min-h-screen">
      <ul className="w-full flex flex-col text-xl font-semibold">
        <Link
          href={routes[0].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <FcHome />
          Dashboard
        </Link>
        <Link
          href={routes[1].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <GrMapLocation />
          Location
        </Link>
        <Link
          href={routes[2].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <FcClock />
          Logs
        </Link>
        <Link
          href={routes[3].path}
          className="flex items-center gap-2 hover:bg-slate-200/50 px-5 py-3"
        >
          <GrTools />
          Workers
        </Link>
      </ul>
      <ul className="w-full text-xl font-semibold">
        <li className="flex items-center gap-2 px-5 py-3">
          <FcExport />
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
