import Image from "next/image";
import { Activity, Role } from "@/constants/Types";

export default function EventListing(props: any) {
  return (
    <>
      {props.activities.map((activity: Activity) => (
        <div className="flex items-start text-text-0" key={activity.eventName}>
          <Image
            src={activity.imgSrc}
            alt={activity.imgAlt}
            width={128}
            height={128}
            className="rounded-xl w-[8rem]"
          />
          <div className="rounded-lg p-2 ml-10">
            <a href={activity.eventLink} className="hover:text-sky-4 font-bold">
              {activity.eventName}
            </a>
            {activity.roles.map((element: Role) => (
              <div key={element.description}>
                <br />
                <div className="float-root text-text-0 font-semi-bold">
                  <p className="float-left italic">{element.title}</p>
                  <p className="float-right">{element.time}</p>
                </div>
                <br />
                <p className="hyphens-auto">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
