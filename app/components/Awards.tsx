import { ENG_awardsList } from "@/constants/EnglishPage";
import EventListing from "./EventListing";
import Header from "@/components/Header";

export default function Awards() {
  return (
    <div id="awards" className="relative bg-slate-0 h-full pt-[62px]">
      <div className="relative p-5 lg:w-[50%] m-auto rounded-xl">
        <Header name="Awards" />
        <div className="justify-center">
          <EventListing activities={ENG_awardsList} />
        </div>
      </div>
    </div>
  );
}
