import EventListing from "./EventListing";
import { ENG_activitiesList } from "@/constants/EnglishPage";

export default function Activities() {
  return (
    <div id="activities" className="relative bg-slate-0 h-full">
      <div className="relative p-5 pt-[62px] sm:w-[75%] lg:w-[50%] m-auto rounded-xl">
        {/* Activities */}
        <div className="flex items-center mb-10">
          <div className="flex-1 border-t-2 border-slate-3 border-dotted"></div>
          <span className="px-3 text-text-0 text-m">Activities</span>
          <div className="flex-1 border-t-2 border-slate-3 border-dashed"></div>
        </div>
        <div className="justify-center">
          <EventListing activities={ENG_activitiesList} />
        </div>
      </div>
    </div>
  );
}
