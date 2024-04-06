import { ENG_projects } from "@/constants/EnglishPage";
import { Project } from "@/constants/Types";
import Link from "next/link";
import Header from "@/components/Header";

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-0 text-text-0 pt-[62px]">
      <div className="relative p-5 sm:w-[75%] lg:w-[50%] m-auto rounded-xl">
        <Header name="Projects"/>
        <div className="divide-y divide-slate-4">
          {ENG_projects.map((project: Project) => (
            <div key={project.name} className="my-6">
              <Link href={project.repo}>
                <p className="text-centered font-semibold text-xl mt-3 hover:text-sky-4">
                  {project.name}
                </p>
              </Link>
              {project.videoSrc !== "" && (
                <video
                  src={project.videoSrc}
                  controls
                  autoPlay
                  muted
                  className="my-1"
                />
              )}
              <project.description />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
