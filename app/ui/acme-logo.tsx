import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
        재무 대시보드
      </p>
    </div>
  );
}
