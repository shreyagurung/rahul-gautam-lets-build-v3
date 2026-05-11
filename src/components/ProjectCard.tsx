import FadeIn from "./FadeIn";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const image =
    project.images && project.images.length > 0
      ? project.images[0]
      : "/images/placeholder.jpg";

  return (
    <div id={project.id} className="scroll-mt-24">
      <FadeIn>
        <div className="overflow-hidden">
          <img
            src={image}
            alt={project.title}
            loading="lazy"
            className={cn(
              "w-full object-cover",
              featured ? "h-[50vh] md:h-[65vh]" : "h-[40vh] md:h-[50vh]"
            )}
          />
        </div>

        <div className="mt-4 max-w-2xl">
          <h3 className="text-lg md:text-xl font-medium leading-tight mb-1">
            {project.title}
          </h3>

          <p className="text-[12px] md:text-[14px] italic text-foreground/60 mb-2">
            {project.collaborator}
          </p>

          <p className="text-sm text-foreground-secondary mb-2">
            {project.location}
          </p>

          <p className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-foreground-secondary mb-3">
            {project.role}
          </p>

          {project.description && (
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">
              {project.description}
            </p>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default ProjectCard;