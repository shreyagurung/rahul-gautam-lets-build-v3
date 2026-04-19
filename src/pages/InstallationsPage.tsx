import CategoryPage from "./CategoryPage";
import { installationProjects } from "@/data/projects";
import install1 from "@/assets/install-1.jpg";
import install2 from "@/assets/install-2.jpg";
import install3 from "@/assets/install-3.jpg";

const images: Record<string, string[]> = {
  "chaal": [install1, install2, install3],
  "min-rukam": [install2, install1, install3],
  "make-shift": [install3, install1, install2],
  "alt-fest-installations": [install1, install3, install2],
};

const InstallationsPage = () => (
  <CategoryPage
    label="Installations"
    projects={installationProjects}
    images={images}
  />
);

export default InstallationsPage;
