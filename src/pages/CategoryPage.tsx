import { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectGallery from "@/components/ProjectGallery";
import NextExploration from "@/components/NextExploration";
import { typography } from "@/lib/typography";
import type { Project } from "@/data/projects";

interface CategoryPageProps {
  label: string;
  projects: Project[];
}

const CategoryPage = ({ label, projects }: CategoryPageProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const location = useLocation();

  // Derive current category slug from pathname
  const currentCategorySlug = location.pathname.replace('/', '');

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Track scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const refs = projectRefs.current;
    refs.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [projects]);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveId(hash);
        }
      }, 100);
    }
  }, [projects]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-content mx-auto px-6 md:px-10 py-12 md:py-20">
        <Link
          to="/"
          className={`group inline-flex items-center gap-2 ${typography.navLink} mb-12`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:text-accent" />
          Back
        </Link>

        <FadeIn>
          <h1 className={`${typography.categoryTitle} mb-4`}>
            {label}
          </h1>
          <div className="w-12 h-px bg-border mb-2" />
        </FadeIn>

        <ProjectFilter
          projects={projects}
          activeId={activeId}
          onSelect={handleSelect}
        />

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => {
            const isFeatured = i === 0;

            // 🔥 THIS is the key change
            const imgs = project.images?.length
              ? project.images
              : ["/images/placeholder.jpg"];

            return (
              <div
                key={project.id}
                id={project.id}
                ref={(el) => {
                  if (el) projectRefs.current.set(project.id, el);
                }}
                className="scroll-mt-24"
              >
                <FadeIn>
                  <ProjectGallery
                    images={imgs}
                    alt={project.title}
                    featured={isFeatured}
                  />

                  <div className="mt-4 max-w-2xl">
                    <h2 className={`${typography.subheading} mb-1`}>
                      {project.title}
                    </h2>
                    <p className={`${typography.caption} text-foreground-secondary mb-2`}>
                      {project.location}
                    </p>
                    <p className={`${typography.metadata} text-accent mb-3`}>
                      {project.role}
                    </p>

                    {project.description && (
                      <p className={`${typography.body} text-foreground/90`}>
                        {project.description}
                      </p>
                    )}
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>

      <NextExploration currentCategorySlug={currentCategorySlug} />

      <footer className="py-8 border-t border-border">
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className={`${typography.metadata} text-foreground-secondary`}>
            © {new Date().getFullYear()} Rahul Gautam
          </p>
          <p className={`${typography.metadata} text-foreground-secondary`}>
            Built with natural materials and intention
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;