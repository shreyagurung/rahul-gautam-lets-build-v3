import { Link } from "react-router-dom";
import { categories } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import { typography } from "@/lib/typography";

interface NextExplorationProps {
  currentCategorySlug: string;
}

const NextExploration = ({ currentCategorySlug }: NextExplorationProps) => {
  // Get the other two categories (excluding current)
  const otherCategories = categories.filter(cat => cat.slug !== currentCategorySlug);

  if (otherCategories.length === 0) return null;

  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <FadeIn>
          <h2 className={`${typography.subheading} mb-6 text-accent`}>
            Next Exploration
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {otherCategories.map((category) => {
            // Find the representative project to get preview image
            const repProject = category.projects.find(p => p.title === category.representativeProject);
            const previewImage = repProject?.images?.[0];

            return (
              <FadeIn key={category.slug} delay={0.1}>
                <Link
                  to={category.path}
                  className="group block"
                >
                  <div className="space-y-3">
                    {previewImage && (
                      <div className="relative overflow-hidden aspect-[16/10] bg-foreground/5">
                        <img
                          src={previewImage}
                          alt={`${category.label} preview`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="space-y-1">
                      <h3 className={`${typography.caption} group-hover:text-accent transition-colors duration-300`}>
                        {category.label}
                      </h3>
                      <p className={`${typography.metadata} text-foreground-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        Explore →
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NextExploration;