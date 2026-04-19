export interface Project {
  id: string;
  title: string;
  location: string;
  role: string;
  description: string;
  images: string[];
}

export interface Category {
  slug: string;
  label: string;
  path: string;
  projects: Project[];
  representativeProject: string;
}

export const architectureProjects: Project[] = [
  {
    id: "tea-tourism-center",
    title: "Tea Tourism Center",
    location: "Makaibari Tea Estate, Kurseong",
    role: "Design Support | Prototyping | On-site Execution",
    description:
      "Souvenir shop retrofit (54 sqm), bamboo pavilion (100 sqm), bamboo selection, load testing, treatment, artisan training, 19 arches using rup-rup technique",
    images: [
      "/images/architecture/tea-tourism-center/cover.svg",
      "/images/architecture/tea-tourism-center/01.jpg",
      "/images/architecture/tea-tourism-center/02.jpg",
      "/images/architecture/tea-tourism-center/03.jpg",
      "/images/architecture/tea-tourism-center/04.jpg"
    ],
  },
  {
    id: "deepsthal-gurukulam-gym-pavilion",
    title: "Deepsthal Gurukulam Gym Pavilion",
    location: "Pondicherry",
    role: "On-site Execution | Artisan Team Management",
    description: "2600 sqft, 12 arches, arched trusses, lattice roof",
    images: [
       "/images/architecture/gym-pavillion/cover.jpg",
                      "/images/architecture/gym-pavillion/01.jpg",
                      "/images/architecture/gym-pavillion/02.jpg",
                      "/images/architecture/gym-pavillion/03.jpg"
    ],
  },
  {
    id: "urmika-gazebo",
    title: "Urmika Gazebo",
    location: "Raichak",
    role: "Turnkey Execution",
    description: "",
    images: [
 "/images/architecture/urmika-gazebo/cover.jpg",
                      "/images/architecture/urmika-gazebo/01.jpg",
                      "/images/architecture/urmika-gazebo/02.jpg"
    ],
  },
  {
    id: "women-coir-craft-center",
    title: "Women Coir Craft Center",
    location: "Sakhi Gopal, Orissa",
    role: "Intermittent On-site Support",
    description:
      "Bamboo roof, flattened bamboo shingles, ferrocement roofing",
    images: [
      "/images/architecture/women-coir-craft/cover.jpg",
                      "/images/architecture/women-coir-craft/01.jpg",
                      "/images/architecture/women-coir-craft/02.jpg"
    ],
  },
  {
    id: "low-cost-cyclone-resilient-roofing",
    title: "Low Cost Cyclone Resilient Roofing",
    location: "Sundarban",
    role: "Technical Facilitator",
    description: "Ferrocement shell roofing, artisan training",
    images: [
      "/images/architecture/cyclone-resilient-roofing/cover.jpeg",
                      "/images/architecture/cyclone-resilient-roofing/01.jpeg",
                      "/images/architecture/cyclone-resilient-roofing/02.jpeg",
                      "/images/architecture/cyclone-resilient-roofing/03.jpeg"
    ],
  },
  {
    id: "dzomsa-retrofit",
    title: "Dzomsa Retrofit",
    location: "Darjeeling",
    role: "Design | Structural Intervention | Artisan Training",
    description: "Wattle and daub walls, classroom transformation",
    images: [
      "/images/architecture/dzomsa-retrofit/cover.jpeg",
      "/images/architecture/dzomsa-retrofit/01.jpeg",
                      "/images/architecture/dzomsa-retrofit/02.jpeg",
                      "/images/architecture/dzomsa-retrofit/03.jpeg"
    ],
  },
  {
    id: "tilloo-farmhouse-pavilion",
    title: "Tilloo Farmhouse Pavilion",
    location: "Mulshi, Pune",
    role: "Turnkey Execution",
    description: "2475 sqft roof, 12 arches, central oculus",
    images: [
      "/images/architecture/tilloo-farmhouse-pavilion/cover.jpeg",
      "/images/architecture/tilloo-farmhouse-pavilion/01.jpeg",
                      "/images/architecture/tilloo-farmhouse-pavilion/02.jpeg",
                      "/images/architecture/tilloo-farmhouse-pavilion/03.jpeg"
    ],
  },
];

export const installationProjects: Project[] = [
  {
    id: "chaal",
    title: "Chaal",
    location: "Mumbai",
    role: "Artisan Manager",
    description: "Large-scale bamboo installation, lashing, sensors",
    images: [
      "/images/installations/chaal/cover.jpeg",
                      "/images/installations/chaal/01.jpeg",
                      "/images/installations/chaal/02.jpeg",
                      "/images/installations/chaal/03.jpeg"
    ],
  },
  {
    id: "min-rukam",
    title: "Min-Rukam",
    location: "Jeddah",
    role: "Project Management",
    description: "Bamboo sourcing, artisan coordination",
    images: [
      "/images/installations/min-rukam/cover.jpeg",
                      "/images/installations/min-rukam/01.jpeg",
                      "/images/installations/min-rukam/02.jpeg",
                      "/images/installations/min-rukam/03.jpeg"
    ],
  },
  {
    id: "make-shift",
    title: "Make-Shift",
    location: "Ahmedabad",
    role: "Artist Assist",
    description: "Scrap metal fabrication",
    images: [
        "/images/installations/make-shift/cover.jpeg",
                      "/images/installations/make-shift/01.jpeg",
                      "/images/installations/make-shift/02.jpeg",
                      "/images/installations/make-shift/03.jpeg"
    ],
  },
  {
    id: "alt-fest-installations",
    title: "Alt Fest Installations",
    location: "Bangalore",
    role: "Design Support | Execution",
    description: "Multiple installations across city",
    images: [
       "/images/installations/alt-fest-installations/cover.jpeg",
                      "/images/installations/alt-fest-installations/01.jpeg",
                      "/images/installations/alt-fest-installations/02.jpeg",
                      "/images/installations/alt-fest-installations/03.jpeg"
    ],
  },
];

export const festivalProjects: Project[] = [
  {
    id: "monyul-gathering-2020",
    title: "Monyul Gathering 2020",
    location: "Arunachal Pradesh",
    role: "Production Lead",
    description: "3-day zero-waste event, village-wide design",
    images: [
      "/images/festival-spaces/monyul-gathering-2020/cover.jpeg",
                      "/images/festival-spaces/monyul-gathering-2020/01.jpeg",
                      "/images/festival-spaces/monyul-gathering-2020/02.jpeg",
                      "/images/festival-spaces/monyul-gathering-2020/03.jpeg"
    ],
  },
  {
    id: "campone-campsite-2022",
    title: "CampONE Campsite 2022",
    location: "Ziro",
    role: "Production Lead",
    description: "3-acre campsite, 300 people",
    images: [
      "/images/festival-spaces/campone-campsite-2022/cover.jpeg",
                      "/images/festival-spaces/campone-campsite-2022/01.jpeg",
                      "/images/festival-spaces/campone-campsite-2022/02.jpeg",
                      "/images/festival-spaces/campone-campsite-2022/03.jpeg"
    ],
  },
  {
    id: "ziro-festival-of-music-2022",
    title: "Ziro Festival of Music 2022",
    location: "Ziro",
    role: "Design & Supervision",
    description: "8-acre festival, stages, stalls, installations",
    images: [
      "/images/festival-spaces/ziro-festival-2022/cover.jpeg",
                      "/images/festival-spaces/ziro-festival-2022/01.jpeg",
                      "/images/festival-spaces/ziro-festival-2022/02.jpeg",
                      "/images/festival-spaces/ziro-festival-2022/03.jpeg"
    ],
  },
  {
    id: "ziro-festival-of-music-2023",
    title: "Ziro Festival of Music 2023",
    location: "Ziro",
    role: "Execution Lead",
    description: "8-acre festival, 70+ artisans, multiple structures",
    images: [
      "/images/festival-spaces/ziro-festival-2023/cover.jpeg",
                      "/images/festival-spaces/ziro-festival-2023/01.jpeg",
                      "/images/festival-spaces/ziro-festival-2023/02.jpeg",
                      "/images/festival-spaces/ziro-festival-2023/03.jpeg"
    ],
  },
];

export const categories: Category[] = [
  {
    slug: "architecture",
    label: "Architecture",
    path: "/architecture",
    projects: architectureProjects,
    representativeProject: "Tea Tourism Center",
  },
  {
    slug: "installations",
    label: "Installations",
    path: "/installations",
    projects: installationProjects,
    representativeProject: "Chaal",
  },
  {
    slug: "festival-spaces",
    label: "Festival Spaces",
    path: "/festival-spaces",
    projects: festivalProjects,
    representativeProject: "Ziro Festival of Music 2023",
  },
];
