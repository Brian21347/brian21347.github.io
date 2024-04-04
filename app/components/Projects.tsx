import { ENG_projects } from "@/constants/EnglishPage";
import { Project } from "@/constants/Types";

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-0 text-text-0 pt-[62px]">
      <div className="relative p-5 sm:w-[75%] lg:w-[50%] m-auto rounded-xl">
        <div className="flex items-center mb-10">
          <div className="flex-1 border-t-2 border-slate-3 border-dotted"></div>
          <span className="px-3 text-text-0 text-m">Projects</span>
          <div className="flex-1 border-t-2 border-slate-3 border-dotted"></div>
        </div>
        {ENG_projects.map((project: Project) => (
          <div key={project.name}>
            <p className="text-centered font-semibold text-xl">
              {project.name}
            </p>
            <project.description />
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
}
