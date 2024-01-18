import { project } from "@/config/project";
import { ProjectCard } from "@/components/ProjectCard";

export function generateMetadata() {
  return {
    title: "项目",
  };
}

export default function Page() {
  return (
    <div className="animate-page-in-2 mt-10 flex flex-col flex-wrap items-center justify-between gap-12 lg:flex-row">
      {project.map((item) => (
        <ProjectCard
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
          tags={item.tags}
        />
      ))}
    </div>
  );
}
