import FadeIn from "./FadeIn";

interface ProjectItem {
  src: string;
  title: string;
  subtitle?: string;
  large?: boolean;
}

interface ProjectSectionProps {
  id: string;
  label: string;
  description: string;
  featured: ProjectItem;
  grid: ProjectItem[];
}

const ProjectSection = ({ id, label, description, featured, grid }: ProjectSectionProps) => (
  <section id={id} className="py-20 md:py-32">
    <div className="max-w-content mx-auto px-6 md:px-10">
      <FadeIn>
        <p className="text-foreground-secondary text-sm tracking-widest uppercase mb-3">{label}</p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">{description}</h2>
        <div className="w-12 h-px bg-border mb-12" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-8">
          <div className="overflow-hidden">
            <img
              src={featured.src}
              alt={featured.title}
              loading="lazy"
              className="w-full h-[50vh] md:h-[65vh] object-cover"
            />
          </div>
          <div className="mt-4 flex justify-between items-baseline">
            <p className="text-sm font-medium">{featured.title}</p>
            {featured.subtitle && (
              <p className="text-xs text-foreground-secondary">{featured.subtitle}</p>
            )}
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {grid.map((item, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <div className="overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-[40vh] md:h-[50vh] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="mt-3 flex justify-between items-baseline">
              <p className="text-sm font-medium">{item.title}</p>
              {item.subtitle && (
                <p className="text-xs text-foreground-secondary">{item.subtitle}</p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
