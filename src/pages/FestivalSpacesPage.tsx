import CategoryPage from "./CategoryPage";
import { festivalProjects } from "@/data/projects";
import festival1 from "@/assets/festival-1.jpg";
import festival2 from "@/assets/festival-2.jpg";
import festival3 from "@/assets/festival-3.jpg";

const images: Record<string, string[]> = {
  "monyul-gathering-2020": [festival1, festival2, festival3],
  "campone-campsite-2022": [festival2, festival1, festival3],
  "ziro-festival-of-music-2022": [festival3, festival1, festival2],
  "ziro-festival-of-music-2023": [festival1, festival3, festival2],
};

const FestivalSpacesPage = () => (
  <CategoryPage
    label="Festival Spaces"
    projects={festivalProjects}
    images={images}
  />
);

export default FestivalSpacesPage;
