import CategoryPage from "./CategoryPage";
import { festivalProjects } from "@/data/projects";


const FestivalSpacesPage = () => (
  <CategoryPage
  label="Festival Spaces"
  projects={festivalProjects}
/>
);

export default FestivalSpacesPage;
