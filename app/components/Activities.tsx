import EventListing from "./EventListing";
import { ENG_activitiesList } from "@/constants/EnglishPage";

export default function Activities() {
  return (
    <div id="activities" className="relative bg-slate0 h-full">
      <div className="relative p-20 pt-10 w-[80%] m-auto rounded-xl">
        {/* Activities */}
        <div className="flex items-center mb-10">
          <div className="flex-1 border-t-2 border-slate3 border-dotted"></div>
          <span className="px-3 text-text0 text-m">Activities</span>
          <div className="flex-1 border-t-2 border-slate3 border-dashed"></div>
        </div>
        <div className="justify-center">
          <EventListing activities={ENG_activitiesList} />
        </div>
      </div>
    </div>
  );
}
