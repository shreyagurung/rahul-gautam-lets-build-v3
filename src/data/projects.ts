export interface Project {
  id: string;
  title: string;

  collaboration: string;
  location: string;
  involvement: string;

  summary: string;

  tags?: string[];

  notes?: {
    scale?: string[];
    process?: string[];
    materials?: string[];
    structure?: string[];
    collaboration?: string[];
    recognition?: string[];
    timeline?: string[];
  };

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

    collaboration:
      "QX Design + Mianzi Global + Dooars Handicraft",

    location:
      "Makaibari Tea Estate, Kurseong, West Bengal",

    involvement:
      "Design Support · Prototyping · On-site Execution",

    summary:
      "Souvenir shop retrofit and bamboo pavilion developed through prototyping, load testing, artisan training, and manually raised rup-rup bamboo arches on steep terrain.",

    tags: [
      "54 sqm retrofit",
      "100 sqm pavilion",
      "19 arches",
    ],

    notes: {
      process: [
        "Model-making",
        "Bamboo species selection",
        "Load testing",
        "Bamboo treatment",
        "Artisan training",
      ],

      structure: [
        "Rup-rup bamboo arch construction",
        "Manual arch erection on hilly terrain",
      ],

      collaboration: [
        "Collaboration between design studio, contractor team, and trained artisans",
        "Strong execution and prototyping involvement",
      ],

      recognition: [
        "Featured as Citation Project in The Merit List 2022–23",
      ],
    },

    images: [
      "/images/architecture/tea-tourism-center/cover.svg",
      "/images/architecture/tea-tourism-center/01.jpg",
      "/images/architecture/tea-tourism-center/02.jpg",
      "/images/architecture/tea-tourism-center/03.jpg",
      "/images/architecture/tea-tourism-center/04.jpg",
    ],
  },

  {
    id: "deepsthal-gurukulam-gym-pavilion",
    title: "Deepsthal Gurukulam Gym Pavilion",

    collaboration:
      "QX Design + Ovoid Atelier + Dooars Handicraft",

    location: "Pondicherry",

    involvement:
      "On-site Execution · Artisan Team Management",

    summary:
      "Large-span bamboo gym pavilion with arched trusses and lattice systems designed for a living roof.",

    tags: [
      "2600 sqft",
      "12 arches",
      "11.7m height",
    ],

    notes: {
      scale: [
        "8 set arched trusses",
        "Approx. 9m width",
        "Approx. 11.7m height",
      ],

      structure: [
        "Large-span bamboo truss system",
        "Lattice structure for living roof",
      ],

      collaboration: [
        "Multi-studio collaboration",
        "Managed artisan teams during execution",
      ],
    },

    images: [
      "/images/architecture/gym-pavillion/cover.jpg",
      "/images/architecture/gym-pavillion/01.jpg",
      "/images/architecture/gym-pavillion/02.jpg",
      "/images/architecture/gym-pavillion/03.jpg",
    ],
  },

  {
    id: "urmika-gazebo",
    title: "Urmika Gazebo",

    collaboration:
      "QX Design + Dooars Handicraft",

    location:
      "Ganga Lehri, Raichak",

    involvement:
      "Turnkey Execution",

    summary:
      "Riverside bamboo gazebo executed as a lightweight pavilion intervention at Ganga Lehri.",

    tags: [
      "Gazebo",
      "Pavilion",
      "Turnkey execution",
    ],

    notes: {
      collaboration: [
        "Executed with Dooars Handicraft",
      ],
    },

    images: [
      "/images/architecture/urmika-gazebo/cover.jpg",
      "/images/architecture/urmika-gazebo/01.jpg",
      "/images/architecture/urmika-gazebo/02.jpg",
    ],
  },

  {
    id: "women-coir-craft-center",
    title: "Women Coir Craft Center",

    collaboration:
      "QX Design + Local Artisan Team",

    location:
      "Sakhigopal, Orissa",

    involvement:
      "Intermittent On-site Support",

    summary:
      "Adaptive retrofit transforming an old house into a workshop using bamboo roofing systems, flattened bamboo shingles, and ferrocement.",

    tags: [
      "Retrofit",
      "Ferrocement roofing",
      "Bamboo shingles",
    ],

    notes: {
      process: [
        "Old house remodeled into workshop",
        "Prototype development",
        "Supervision for select details",
      ],

      materials: [
        "Flattened bamboo shingles",
        "2-inch ferrocement roofing",
        "Bamboo roof structure",
      ],

      collaboration: [
        "Worked with local artisan teams",
        "Material experimentation with bamboo and ferrocement",
      ],
    },

    images: [
      "/images/architecture/women-coir-craft/cover.jpg",
      "/images/architecture/women-coir-craft/01.jpg",
      "/images/architecture/women-coir-craft/02.jpg",
    ],
  },

  {
    id: "low-cost-cyclone-resilient-roofing",
    title: "Low Cost Cyclone Resilient Roofing",

    collaboration:
      "QX Design + Local Artisans + Homeowners",

    location:
      "Purba Sridharpur, Sundarban, West Bengal",

    involvement:
      "Technical Facilitator",

    summary:
      "Community-based low-cost ferrocement shell roofing system developed for cyclone resilience in the Sundarbans.",

    tags: [
      "Ferrocement shell",
      "Community construction",
      "Cyclone resilient",
    ],

    notes: {
      process: [
        "On-site prefabricated ferrocement shell roofing",
        "Technical training",
        "Artisan support",
      ],

      collaboration: [
        "Community-based construction approach",
        "Technical transfer to local teams",
      ],

      materials: [
        "Ferrocement shell roofing",
      ],
    },

    images: [
      "/images/architecture/cyclone-resilient-roofing/cover.jpeg",
      "/images/architecture/cyclone-resilient-roofing/01.jpeg",
      "/images/architecture/cyclone-resilient-roofing/02.jpeg",
      "/images/architecture/cyclone-resilient-roofing/03.jpeg",
    ],
  },

  {
    id: "dzomsa-retrofit",
    title: "Dzomsa Retrofit",

    collaboration:
      "TIEEDI Forest Garden + In-house Artisan Team",

    location:
      "Darjeeling",

    involvement:
      "Design · Structural Intervention · Artisan Training",

    summary:
      "Transformation of a semi-open shed into a classroom through structural improvisation, wattle and daub walls, and artisan-led construction.",

    tags: [
      "Classroom for 60",
      "Wattle and daub",
      "Structural retrofit",
    ],

    notes: {
      process: [
        "Embedded doors and windows",
        "Structural reinterpretation",
        "Artisan training in structural techniques",
      ],

      structure: [
        "Hyperbolic paraboloid + truss hybrid system",
        "Alternate load transfer strategy",
      ],

      collaboration: [
        "Internal artisan training process",
        "Adaptive retrofit strategy",
      ],
    },

    images: [
      "/images/architecture/dzomsa-retrofit/cover.jpeg",
      "/images/architecture/dzomsa-retrofit/01.jpeg",
      "/images/architecture/dzomsa-retrofit/02.jpeg",
      "/images/architecture/dzomsa-retrofit/03.jpeg",
    ],
  },

  {
    id: "tilloo-farmhouse-pavilion",
    title: "Tilloo Farmhouse Pavilion",

    collaboration:
      "Ray Design Studio + Dooars Handicraft",

    location:
      "Mulshi, Pune",

    involvement:
      "Turnkey Execution",

    summary:
      "Large bamboo pavilion featuring a central oculus and repeated bamboo arch system.",

    tags: [
      "2475 sqft roof",
      "12 arches",
      "Central oculus",
    ],

    notes: {
      scale: [
        "13.4 ft width",
        "12 ft height",
        "6 ft diameter oculus",
      ],

      structure: [
        "Bamboo arch system",
        "Central oculus feature",
      ],
    },

    images: [
      "/images/architecture/tilloo-farmhouse-pavilion/cover.jpeg",
      "/images/architecture/tilloo-farmhouse-pavilion/01.jpeg",
      "/images/architecture/tilloo-farmhouse-pavilion/02.jpeg",
      "/images/architecture/tilloo-farmhouse-pavilion/03.jpeg",
    ],
  },
];

export const installationProjects: Project[] = [
  {
    id: "chaal",
    title: "Chaal",

    collaboration:
      "Asim Waqif + 15+ Artisans from Bengal",

    location:
      "NMACC, Mumbai",

    involvement:
      "Artisan Manager",

    summary:
      "Large-scale interactive bamboo installation exploring rhythm, sound, and spatial movement through woven bamboo systems and sensors.",

    tags: [
      "Interactive installation",
      "Sensors",
      "Multi-species bamboo",
    ],

    notes: {
      process: [
        "Large-scale site-specific installation",
        "Lashing systems",
        "Flattened bamboo and bamboo splits",
      ],

      materials: [
        "Cane",
        "Screwpine",
        "Reed weave",
        "Bamboo percussion instruments",
      ],

      collaboration: [
        "Interdisciplinary collaboration between artist, artisans, and electronics teams",
      ],

      structure: [
        "Sonar",
        "LiDAR",
        "PIR sensors",
        "Load cell sensors",
      ],
    },

    images: [
      "/images/installations/chaal/cover.jpeg",
      "/images/installations/chaal/01.jpeg",
      "/images/installations/chaal/02.jpeg",
      "/images/installations/chaal/03.jpeg",
    ],
  },

  {
    id: "min-rukam",
    title: "Min-Rukam",

    collaboration:
      "Asim Waqif + International Technical Team",

    location:
      "Hajj Pavilion, Jeddah",

    involvement:
      "Project Management",

    summary:
      "International bamboo installation involving cross-disciplinary coordination between artisans, engineers, curators, and sound artists.",

    tags: [
      "22-day execution",
      "23 artisans",
      "International collaboration",
    ],

    notes: {
      process: [
        "Bamboo species oversight",
        "Treatment oversight in Assam",
        "Artisan logistics coordination",
      ],

      collaboration: [
        "Worked with sound engineer, electronics engineer, software engineer, and noise artist",
        "Worked closely with curators",
      ],

      timeline: [
        "22-day execution timeline",
      ],
    },

    images: [
      "/images/installations/min-rukam/cover.jpeg",
      "/images/installations/min-rukam/01.jpeg",
      "/images/installations/min-rukam/02.jpeg",
      "/images/installations/min-rukam/03.jpeg",
    ],
  },

  {
    id: "make-shift",
    title: "Make-Shift",

    collaboration:
      "Asim Waqif + Client Fabrication Team",

    location:
      "Ahmedabad",

    involvement:
      "Artist Assist · On-site Fabrication",

    summary:
      "Scrap metal installation fabricated from a discarded truck body inside an industrial recycling yard.",

    tags: [
      "Scrap metal",
      "Adaptive fabrication",
      "India Art Fair 2025",
    ],

    notes: {
      process: [
        "Material selection",
        "Cutting and welding",
        "Adaptive fabrication",
      ],

      collaboration: [
        "Industrial fabrication setting",
        "Artist-fabricator collaboration",
      ],

      recognition: [
        "Premier exhibit at India Art Fair 2025",
      ],
    },

    images: [
      "/images/installations/make-shift/cover.jpeg",
      "/images/installations/make-shift/01.jpeg",
      "/images/installations/make-shift/02.jpeg",
      "/images/installations/make-shift/03.jpeg",
    ],
  },

  {
    id: "alt-fest-installations",
    title: "Alt Fest Installations",

    collaboration:
      "QX Design + Artisan Team from Kolkata",

    location:
      "Bangalore, Karnataka",

    involvement:
      "Design Support · Execution · Artisan Team Management",

    summary:
      "Fast-paced city-wide festival installations completed across four public locations in fourteen days.",

    tags: [
      "4 sites",
      "14 days",
      "Public installations",
    ],

    notes: {
      timeline: [
        "4 sites completed in 14 days",
      ],

      collaboration: [
        "External artisan team coordination",
        "Temporary public-space interventions",
      ],

      process: [
        "Freedom Park",
        "Vidhan Soudha",
        "Kempegowda International Airport",
        "War Memorial",
      ],
    },

    images: [
      "/images/installations/alt-fest-installations/cover.jpeg",
      "/images/installations/alt-fest-installations/01.jpeg",
      "/images/installations/alt-fest-installations/02.jpeg",
      "/images/installations/alt-fest-installations/03.jpeg",
    ],
  },
];

export const festivalProjects: Project[] = [
  {
    id: "monyul-gathering-2020",
    title: "Monyul Gathering 2020",

    collaboration:
      "HUM + Further & Beyond Foundation",

    location:
      "Sangti, Arunachal Pradesh",

    involvement:
      "Production Lead · Design · Sourcing · Construction",

    summary:
      "Community-driven zero-waste festival integrating spatial design, pathways, workshops, and cultural sensitivity around Losar celebrations.",

    tags: [
      "Zero-waste event",
      "Village-wide design",
      "Community festival",
    ],

    notes: {
      process: [
        "Stages",
        "Pathways",
        "Workshop areas",
        "Waste management infrastructure",
      ],

      collaboration: [
        "Community-scale festival planning",
        "Experience-led spatial design",
      ],

      timeline: [
        "Jan–Feb 2020",
      ],
    },

    images: [
      "/images/festival-spaces/monyul-gathering-2020/cover.jpeg",
      "/images/festival-spaces/monyul-gathering-2020/01.jpeg",
      "/images/festival-spaces/monyul-gathering-2020/02.jpeg",
      "/images/festival-spaces/monyul-gathering-2020/03.jpeg",
    ],
  },

  {
    id: "campone-campsite-2022",
    title: "CampONE Campsite 2022",

    collaboration:
      "ChaloHoppo + Experience Destination + CampX",

    location:
      "Ziro Festival of Music, Arunachal Pradesh",

    involvement:
      "Production Lead · Design & Construction",

    summary:
      "Temporary campsite infrastructure for 300 people including hospitality spaces, utilities, and festival support systems.",

    tags: [
      "3-acre campsite",
      "300 pax",
      "150 tents",
    ],

    notes: {
      process: [
        "Camp stage",
        "Swiss tent decks",
        "Bar",
        "Dining",
        "Washrooms",
        "Utility zones",
      ],

      timeline: [
        "30-day site execution",
      ],

      collaboration: [
        "Hospitality and festival infrastructure integration",
      ],
    },

    images: [
      "/images/festival-spaces/campone-campsite-2022/cover.jpeg",
      "/images/festival-spaces/campone-campsite-2022/01.jpeg",
      "/images/festival-spaces/campone-campsite-2022/02.jpeg",
      "/images/festival-spaces/campone-campsite-2022/03.jpeg",
    ],
  },

  {
    id: "ziro-festival-of-music-2022",
    title: "Ziro Festival of Music 2022",

    collaboration:
      "QX Design + 6–8 Local Artisan Teams",

    location:
      "Ziro, Arunachal Pradesh",

    involvement:
      "Design & Supervision Team",

    summary:
      "Large-scale bamboo festival infrastructure developed using locally sourced materials and artisan-led construction systems.",

    tags: [
      "8-acre festival",
      "50+ artisans",
      "8–10,000 attendees",
    ],

    notes: {
      process: [
        "2 stages",
        "12 merchandise stores",
        "35 food stalls",
        "1 food court",
        "3 installations",
        "2 bridges",
      ],

      materials: [
        "Locally sourced bamboo within 2–3 km radius",
      ],

      timeline: [
        "40-day execution",
      ],

      collaboration: [
        "Large-scale artisan coordination",
        "Temporary bamboo infrastructure",
      ],
    },

    images: [
      "/images/festival-spaces/ziro-festival-2022/cover.jpeg",
      "/images/festival-spaces/ziro-festival-2022/01.jpeg",
      "/images/festival-spaces/ziro-festival-2022/02.jpeg",
      "/images/festival-spaces/ziro-festival-2022/03.jpeg",
    ],
  },

  {
    id: "ziro-festival-of-music-2023",
    title: "Ziro Festival of Music 2023",

    collaboration:
      "QX Design + 6–8 Local Artisan Teams",

    location:
      "Ziro, Arunachal Pradesh",

    involvement:
      "Space Co-design · Execution Lead",

    summary:
      "Expanded bamboo festival infrastructure featuring pavilions, viewing decks, learning spaces, artisan coordination, and turnkey execution.",

    tags: [
      "70+ artisans",
      "8-acre site",
      "35-day execution",
    ],

    notes: {
      process: [
        "2 stages",
        "14 merchandise shops",
        "7 food stalls",
        "500-person food court",
        "Kids area",
        "2-storey viewing deck",
      ],

      collaboration: [
        "Large artisan-led execution system",
        "Co-design process",
        "On-site artisan training",
      ],

      timeline: [
        "35-day execution",
      ],

      materials: [
        "Bamboo design consultancy",
        "Turnkey execution",
      ],
    },

    images: [
      "/images/festival-spaces/ziro-festival-2023/cover.jpeg",
      "/images/festival-spaces/ziro-festival-2023/01.jpeg",
      "/images/festival-spaces/ziro-festival-2023/02.jpeg",
      "/images/festival-spaces/ziro-festival-2023/03.jpeg",
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