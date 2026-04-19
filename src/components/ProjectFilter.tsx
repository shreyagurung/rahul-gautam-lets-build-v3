import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  projects: { id: string; title: string }[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

const ProjectFilter = ({ projects, activeId, onSelect }: ProjectFilterProps) => {
  const navRef = useRef<HTMLElement>(null);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm py-4 -mx-6 px-6 md:-mx-10 md:px-10 mb-12 border-b border-border/50"
    >
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={cn(
              "text-sm transition-colors duration-300 hover:text-accent",
              activeId === p.id
                ? "text-accent underline underline-offset-4 decoration-accent"
                : "text-foreground-secondary"
            )}
          >
            {p.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ProjectFilter;
