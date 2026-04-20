import CategoryPage from "./CategoryPage";
import { installationProjects } from "@/data/projects";


const InstallationsPage = () => (
  <CategoryPage
    label="Installations"
    projects={installationProjects}
  />
);

export default InstallationsPage;
