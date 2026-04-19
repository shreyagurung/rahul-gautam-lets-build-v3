import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

interface CategoryCardProps {
  image: string;
  label: string;
  projectName: string;
  to: string;
  delay?: number;
}

const CategoryCard = ({ image, label, projectName, to, delay = 0 }: CategoryCardProps) => (
  <FadeIn delay={delay}>
    <Link to={to} className="group block">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="w-full h-[40vh] md:h-[50vh] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-foreground-secondary tracking-widest uppercase mb-1">
          {label}
        </p>
        <p className="text-base font-medium">{projectName}</p>
      </div>
    </Link>
  </FadeIn>
);

export default CategoryCard;
