import CategoryPage from "./CategoryPage";
import { architectureProjects } from "@/data/projects";


const ArchitecturePage = () => (
  <CategoryPage
  label="Architecture"
  projects={architectureProjects}
/>
);

export default ArchitecturePage;
