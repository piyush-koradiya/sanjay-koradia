// Progress information for each area/village of the Junagadh constituency.
// NOTE: Names and highlights below are placeholders — replace them with the
// real ward/village names and development work for each numbered area.

export interface AreaProgress {
  id: number;
  /** Display name of the ward / village. */
  name: string;
  /** Number of completed / ongoing development projects. */
  projects: number;
  /** Overall development progress (0–100). */
  progressPct: number;
  /** Short bullet points describing the work done in the area. */
  highlights: string[];
}

export const AREA_PROGRESS: AreaProgress[] = [
  {
    id: 1,
    name: "Area 1",
    projects: 12,
    progressPct: 78,
    highlights: [
      "New CC roads connecting interior streets",
      "Upgraded drinking-water pipeline network",
      "Renovated primary school and playground",
    ],
  },
  {
    id: 2,
    name: "Area 2",
    projects: 9,
    progressPct: 64,
    highlights: [
      "Street-light electrification drive completed",
      "New community hall for public gatherings",
      "Drainage and sanitation improvements",
    ],
  },
  {
    id: 3,
    name: "Area 3",
    projects: 10,
    progressPct: 71,
    highlights: [
      "Repair of approach roads to farmlands",
      "Solar-powered water pumps for farmers",
      "Health sub-centre upgrade",
    ],
  },
  {
    id: 4,
    name: "Area 4",
    projects: 7,
    progressPct: 58,
    highlights: [
      "New bus stop and shelter constructed",
      "Anganwadi building renovation",
      "Improved waste-collection service",
    ],
  },
  {
    id: 5,
    name: "Area 5",
    projects: 14,
    progressPct: 82,
    highlights: [
      "Major road-widening project completed",
      "Underground drainage extension",
      "New public garden and open gym",
    ],
  },
  {
    id: 6,
    name: "Area 6",
    projects: 16,
    progressPct: 85,
    highlights: [
      "Smart-city street upgrades",
      "24x7 water-supply scheme rolled out",
      "Library and study centre for students",
    ],
  },
  {
    id: 7,
    name: "Area 7",
    projects: 11,
    progressPct: 69,
    highlights: [
      "Internal road resurfacing",
      "New overhead water tank",
      "Sports ground development",
    ],
  },
  {
    id: 8,
    name: "Area 8",
    projects: 8,
    progressPct: 61,
    highlights: [
      "Farm-to-market road construction",
      "Check-dam for water conservation",
      "Primary health-care facility",
    ],
  },
  {
    id: 9,
    name: "Area 9",
    projects: 6,
    progressPct: 54,
    highlights: [
      "Electrification of remote hamlets",
      "Drinking-water borewell installation",
      "Village pond rejuvenation",
    ],
  },
  {
    id: 10,
    name: "Area 10",
    projects: 10,
    progressPct: 67,
    highlights: [
      "New concrete roads and culverts",
      "Toilets under sanitation mission",
      "Upgraded school infrastructure",
    ],
  },
  {
    id: 11,
    name: "Area 11",
    projects: 9,
    progressPct: 63,
    highlights: [
      "Street lighting and roads",
      "Irrigation canal lining",
      "Skill-development centre for youth",
    ],
  },
  {
    id: 12,
    name: "Area 12",
    projects: 12,
    progressPct: 74,
    highlights: [
      "Road and drainage network",
      "Piped water connections to homes",
      "Renovated community temple complex",
    ],
  },
  {
    id: 13,
    name: "Area 13",
    projects: 11,
    progressPct: 70,
    highlights: [
      "New approach road and bridge",
      "Solar street lights installed",
      "Health and wellness centre",
    ],
  },
  {
    id: 14,
    name: "Area 14",
    projects: 8,
    progressPct: 60,
    highlights: [
      "Drainage and road improvements",
      "Water-supply augmentation",
      "Anganwadi and school repairs",
    ],
  },
  {
    id: 15,
    name: "Area 15",
    projects: 5,
    progressPct: 49,
    highlights: [
      "Rural road connectivity",
      "Borewell and water storage",
      "Electrification works",
    ],
  },
  {
    id: 16,
    name: "Area 16",
    projects: 7,
    progressPct: 56,
    highlights: [
      "Internal CC roads",
      "Sanitation and drainage works",
      "Public lighting upgrade",
    ],
  },
  {
    id: 17,
    name: "Area 17",
    projects: 13,
    progressPct: 76,
    highlights: [
      "Road network expansion",
      "New water-distribution lines",
      "Community centre and garden",
    ],
  },
  {
    id: 18,
    name: "Area 18",
    projects: 10,
    progressPct: 66,
    highlights: [
      "Resurfaced village roads",
      "Drinking-water scheme",
      "School and Anganwadi upgrades",
    ],
  },
  {
    id: 19,
    name: "Area 19",
    projects: 6,
    progressPct: 52,
    highlights: [
      "Connecting-road construction",
      "Water-supply improvements",
      "Street-light installation",
    ],
  },
  {
    id: 20,
    name: "Area 20",
    projects: 5,
    progressPct: 47,
    highlights: [
      "Rural road works",
      "Hand-pumps and borewells",
      "Electrification drive",
    ],
  },
  {
    id: 21,
    name: "Area 21",
    projects: 4,
    progressPct: 44,
    highlights: [
      "Approach-road improvements",
      "Water-conservation structures",
      "School infrastructure support",
    ],
  },
  {
    id: 22,
    name: "Junagadh City",
    projects: 22,
    progressPct: 90,
    highlights: [
      "City-wide road and flyover upgrades",
      "Modern drinking-water network",
      "Parks, gardens and civic amenities",
      "Education and healthcare facilities",
    ],
  },
  {
    id: 23,
    name: "Area 23",
    projects: 5,
    progressPct: 50,
    highlights: [
      "Local road repairs",
      "Drainage improvements",
      "Public-utility upgrades",
    ],
  },
  {
    id: 24,
    name: "Area 24",
    projects: 5,
    progressPct: 48,
    highlights: [
      "Village road connectivity",
      "Water-storage facilities",
      "Street-lighting works",
    ],
  },
  {
    id: 25,
    name: "Area 25",
    projects: 4,
    progressPct: 45,
    highlights: [
      "Rural infrastructure works",
      "Drinking-water access",
      "Electrification support",
    ],
  },
];

export const AREA_PROGRESS_MAP: Record<number, AreaProgress> = Object.fromEntries(
  AREA_PROGRESS.map((a) => [a.id, a]),
);
