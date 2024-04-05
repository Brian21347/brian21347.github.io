import { FC } from "react";

export type Role = { title: string; time: string; description: string };
export type Activity = {
  image: FC;
  eventName: string;
  eventLink: string;
  roles: Array<Role>;
};
export type Project = {
  name: string;
  videoSrc: string;
  description: FC;
};
