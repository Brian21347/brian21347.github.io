import EventListing from "./EventListing";
import { ENG_activitiesList } from "@/constants/EnglishPage";
import Header from "@/components/Header";

export default function Activities() {
  return (
    <div id="activities" className="relative bg-slate-0 h-full pt-[62px]">
      <div className="relative p-5 sm:w-[75%] lg:w-[50%] m-auto rounded-xl">
        <Header name="Activities" />
        <div className="justify-center">
          <EventListing activities={ENG_activitiesList} />
        </div>
      </div>
    </div>
  );
}
