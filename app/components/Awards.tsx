import { ENG_awardsList } from "@/constants/EnglishPage";
import EventListing from "./EventListing";

export default function Awards() {
  return (
    <div id="awards" className="relative bg-slate-0 h-full">
      <div className="relative p-5 pt-[62px] lg:w-[50%] m-auto rounded-xl">
        {/* Awards */}
        <div className="flex items-center mb-10">
          <div className="flex-1 border-t-2 border-slate-3 border-dotted"></div>
          <span className="px-3 text-text-0 text-m">Awards</span>
          <div className="flex-1 border-t-2 border-slate-3 border-dotted"></div>
        </div>
        <div className="justify-center">
          <EventListing activities={ENG_awardsList} />
        </div>
      </div>
    </div>
  );
}
