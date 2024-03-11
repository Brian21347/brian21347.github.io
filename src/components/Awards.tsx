import { ENG_awardsList } from "@/constants/EnglishPage";
import EventListing from "./EventListing";

export default function Awards() {
  return (
    <div className="relative bg-gradient-to-b from-sky-600 to-blue-700 h-full">
      <div className="relative p-20 pt-10 bg-slate-200 w-[80%] m-auto rounded-xl">
        {/* Awards */}
        <div className="flex items-center mb-10">
          <div className="flex-1 border-t-2 border-slate-400 border-dashed"></div>
          <span className="px-3 text-slate-700 text-m">Awards</span>
          <div className="flex-1 border-t-2 border-slate-400 border-dashed"></div>
        </div>
        <div className="justify-center">
          <EventListing activities={ENG_awardsList} />
        </div>
      </div>
    </div>
  );
}
