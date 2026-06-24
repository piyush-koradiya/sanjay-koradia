export interface PressItem {
  id: number;
  title: string;
  purpose: string;
  type: "press" | "podcast" | "interview";
  date: string;
  source: string;
  highlights: string[];
  link: string;
}

export const pressItems: PressItem[] = [
  {
    id: 1,
    title: "Sanjay Koradia Announces ₹100 Crore Development Package for Junagadh",
    purpose: "Press Release",
    type: "press",
    date: "15 March 2024",
    source: "Gujarat Samachar",
    highlights: [
      "₹100 crore development package approved for Junagadh constituency",
      "Focus on road infrastructure, schools, and healthcare facilities",
      "25 villages to benefit from the new water supply scheme",
      "Work to begin in Q2 2024 with completion by March 2025",
    ],
    link: "https://www.gujaratsamachar.com/",
  },
  {
    id: 2,
    title: "Interview: Building a Self-Reliant Junagadh — Vision 2030",
    purpose: "Exclusive Interview",
    type: "interview",
    date: "28 February 2024",
    source: "Divya Bhaskar",
    highlights: [
      "Vision for Junagadh as a model constituency by 2030",
      "Plans to attract investment worth ₹500 crore in the next three years",
      "Emphasis on agro-processing and eco-tourism sectors",
      "Commitment to zero open defecation and 100% primary school enrollment",
    ],
    link: "https://www.divyabhaskar.co.in/",
  },
  {
    id: 3,
    title: "Podcast: Leadership in Rural Gujarat — Challenges & Opportunities",
    purpose: "Podcast Episode",
    type: "podcast",
    date: "10 January 2024",
    source: "Gujarat Talks Podcast",
    highlights: [
      "Discussion on challenges of governing a semi-rural constituency",
      "How digital governance transformed service delivery in Junagadh",
      "The role of youth in shaping the future of Gujarat politics",
      "Insights on the farmer welfare schemes and their grassroots impact",
    ],
    link: "https://www.youtube.com/",
  },
  {
    id: 4,
    title: "Koradia Leads Delegation for Junagadh Industrial Corridor",
    purpose: "Press Release",
    type: "press",
    date: "5 December 2023",
    source: "Times of India – Ahmedabad",
    highlights: [
      "Industrial corridor proposal submitted to Gujarat Industrial Development Corporation",
      "Expected to create 10,000 direct jobs and 40,000 indirect employment opportunities",
      "Land acquisition process to begin following environmental clearance",
      "Chief Minister's office has expressed in-principle approval",
    ],
    link: "https://timesofindia.indiatimes.com/",
  },
  {
    id: 5,
    title: "Women Empowerment: Sanjay Koradia's SHG Initiative Recognised Nationally",
    purpose: "Press Release",
    type: "press",
    date: "20 November 2023",
    source: "Sandesh",
    highlights: [
      "800 women's self-help groups formed across Junagadh in 2023",
      "Total credit linkage of ₹30 crore facilitated through nationalised banks",
      "National award for best-performing SHG network in semi-urban Gujarat",
      "Model to be replicated in five other constituencies by state government",
    ],
    link: "https://www.sandesh.com/",
  },
  {
    id: 6,
    title: "Interview: Education as the Cornerstone of Junagadh's Future",
    purpose: "Interview",
    type: "interview",
    date: "8 October 2023",
    source: "The Indian Express – Ahmedabad",
    highlights: [
      "15 government schools renovated with modern infrastructure in 2023",
      "Mid-day meal programme upgraded — 12,000 students benefit daily",
      "Digital literacy drive targeting 50,000 youth in 18 months",
      "Scholarship fund established for meritorious students from BPL families",
    ],
    link: "https://indianexpress.com/",
  },
];
