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
          <h3 className="text-lg md:text-xl font-medium mb-1">
            {project.title}
          </h3>

          <p className="text-sm text-foreground-secondary mb-2">
            {project.location}
          </p>

          <p className="text-xs text-foreground-secondary tracking-wide uppercase mb-3">
            {project.role}
          </p>

          {project.description && (
            <p className="text-sm md:text-base leading-relaxed text-foreground/90">
              {project.description}
            </p>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default ProjectCard;