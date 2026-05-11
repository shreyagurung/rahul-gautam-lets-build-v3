import { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";

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

  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const location = useLocation();

  const currentCategorySlug = location.pathname.replace("/", "");

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedProjects((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

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
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    const refs = projectRefs.current;

    refs.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [projects]);

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });

          setActiveId(hash);
        }
      }, 100);
    }
  }, [projects]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-content mx-auto px-6 md:px-10 py-12 md:py-20">
        {/* Back */}
        <Link
          to="/"
          className={`group inline-flex items-center gap-2 ${typography.navLink} mb-12`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:text-accent transition-colors" />
          Back
        </Link>

        {/* Heading */}
        <FadeIn>
          <h1 className={`${typography.categoryTitle} mb-4`}>
            {label}
          </h1>

          <div className="w-12 h-px bg-border mb-2" />
        </FadeIn>

        {/* Filter */}
        <ProjectFilter
          projects={projects}
          activeId={activeId}
          onSelect={handleSelect}
        />

        {/* Projects */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, i) => {
            const isFeatured = i === 0;

            const imgs = project.images?.length
              ? project.images
              : ["/images/placeholder.jpg"];

            const isExpanded = expandedProjects.includes(project.id);

            return (
              <div
                key={project.id}
                id={project.id}
                ref={(el) => {
                  if (el) {
                    projectRefs.current.set(project.id, el);
                  }
                }}
                className="scroll-mt-24"
              >
                <FadeIn>
                  {/* Gallery */}
                  <ProjectGallery
                    images={imgs}
                    alt={project.title}
                    featured={isFeatured}
                  />

                  {/* Content */}
                  <div className="mt-6 max-w-4xl">
                    {/* Title */}
                    <h2 className={`${typography.subheading} mb-6`}>
                      {project.title}
                    </h2>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-12 mb-8">
                      {/* Collaboration */}
                      <div>
                        <p
                          className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-2`}
                        >
                          Collaboration
                        </p>

                        <p
                          className={`${typography.body} text-foreground`}
                        >
                          {project.collaboration}
                        </p>
                      </div>

                      {/* Location */}
                      <div>
                        <p
                          className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-2`}
                        >
                          Location
                        </p>

                        <p
                          className={`${typography.body} text-foreground`}
                        >
                          {project.location}
                        </p>
                      </div>

                      {/* Involvement */}
                      <div>
                        <p
                          className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-2`}
                        >
                          Involvement
                        </p>

                        <p
                          className={`${typography.body} text-accent`}
                        >
                          {project.involvement}
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    {project.summary && (
                      <p
                        className={`${typography.body} text-foreground/90 max-w-3xl leading-relaxed mb-6`}
                      >
                        {project.summary}
                      </p>
                    )}

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] uppercase tracking-[0.14em] border border-border px-3 py-1 text-foreground-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expand Button */}
                    {project.notes && (
                      <button
                        onClick={() => toggleExpanded(project.id)}
                        className="group inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase text-foreground-secondary hover:text-accent transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <Minus className="w-4 h-4" />
                            Hide Notes
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            Project Notes
                          </>
                        )}
                      </button>
                    )}

                    {/* Expanded Notes */}
                    {isExpanded && project.notes && (
                      <div className="mt-10 pt-10 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {/* Scale */}
                        {project.notes.scale && (
                          <div>
                            <h3
                              className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-4`}
                            >
                              Scale
                            </h3>

                            <ul className="space-y-2">
                              {project.notes.scale.map((item) => (
                                <li
                                  key={item}
                                  className={`${typography.body} text-foreground/90`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Process */}
                        {project.notes.process && (
                          <div>
                            <h3
                              className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-4`}
                            >
                              Process
                            </h3>

                            <ul className="space-y-2">
                              {project.notes.process.map((item) => (
                                <li
                                  key={item}
                                  className={`${typography.body} text-foreground/90`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Materials */}
                        {project.notes.materials && (
                          <div>
                            <h3
                              className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-4`}
                            >
                              Materials
                            </h3>

                            <ul className="space-y-2">
                              {project.notes.materials.map((item) => (
                                <li
                                  key={item}
                                  className={`${typography.body} text-foreground/90`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Structure */}
                        {project.notes.structure && (
                          <div>
                            <h3
                              className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-4`}
                            >
                              Structural Notes
                            </h3>

                            <ul className="space-y-2">
                              {project.notes.structure.map((item) => (
                                <li
                                  key={item}
                                  className={`${typography.body} text-foreground/90`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Collaboration */}
                        {project.notes.collaboration && (
                          <div>
                            <h3
                              className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-4`}
                            >
                              Collaboration Notes
                            </h3>

                            <ul className="space-y-2">
                              {project.notes.collaboration.map((item) => (
                                <li
                                  key={item}
                                  className={`${typography.body} text-foreground/90`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Timeline */}
                        {project.notes.timeline && (
                          <div>
                            <h3
                              className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-4`}
                            >
                              Timeline
                            </h3>

                            <ul className="space-y-2">
                              {project.notes.timeline.map((item) => (
                                <li
                                  key={item}
                                  className={`${typography.body} text-foreground/90`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Recognition */}
                        {project.notes.recognition && (
                          <div>
                            <h3
                              className={`${typography.metadata} uppercase tracking-[0.18em] text-foreground-secondary mb-4`}
                            >
                              Recognition
                            </h3>

                            <ul className="space-y-2">
                              {project.notes.recognition.map((item) => (
                                <li
                                  key={item}
                                  className={`${typography.body} text-foreground/90`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Exploration */}
      <NextExploration currentCategorySlug={currentCategorySlug} />

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-24">
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p
            className={`${typography.metadata} text-foreground-secondary`}
          >
            © {new Date().getFullYear()} Rahul Gautam
          </p>

          <p
            className={`${typography.metadata} text-foreground-secondary`}
          >
            Built with natural materials and intention
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;