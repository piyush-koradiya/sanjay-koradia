export interface Moment {
  id: number;
  titleKey?: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: "event" | "community" | "development";
}

export const moments: Moment[] = [
  {
    id: 1,
    title: "Inauguration of New Community Centre",
    description:
      "Inaugurated the newly built community centre in Junagadh providing recreational and educational facilities to over 5,000 residents.",
    image: "/images/placeholder-moment-1.jpg",
    date: "March 2024",
    category: "event",
  },
  {
    id: 2,
    title: "Farmers' Welfare Rally",
    description:
      "Addressed over 2,000 farmers at the annual welfare rally, announcing new irrigation schemes and crop insurance programmes.",
    image: "/images/placeholder-moment-2.jpg",
    date: "February 2024",
    category: "community",
  },
  {
    id: 3,
    title: "Road Infrastructure Launch",
    description:
      "Flagged off a ₹50-crore road development project connecting rural villages of Junagadh to the main highway.",
    image: "/images/placeholder-moment-3.jpg",
    date: "January 2024",
    category: "development",
  },
  {
    id: 4,
    title: "Youth Skill Development Programme",
    description:
      "Launched a vocational training centre providing free skill development courses to 500 youth from underprivileged backgrounds.",
    image: "/images/placeholder-moment-4.jpg",
    date: "December 2023",
    category: "community",
  },
  {
    id: 5,
    title: "Women Empowerment Conclave",
    description:
      "Organised a state-level conclave bringing together women self-help groups to share best practices and secure government support.",
    image: "/images/placeholder-moment-5.jpg",
    date: "November 2023",
    category: "event",
  },
  {
    id: 6,
    title: "Solar Energy Plant Inauguration",
    description:
      "Inaugurated a 10 MW solar energy plant providing clean electricity to 3,000 households across three villages.",
    image: "/images/placeholder-moment-6.jpg",
    date: "October 2023",
    category: "development",
  },
  {
    id: 7,
    title: "Free Medical Camp",
    description:
      "Organised a three-day free medical check-up camp where 1,200 residents received consultations and medicines at no cost.",
    image: "/images/placeholder-moment-7.jpg",
    date: "September 2023",
    category: "community",
  },
  {
    id: 8,
    title: "School Renovation Drive",
    description:
      "Oversaw the renovation of 15 government primary schools, providing new classrooms, libraries and computer labs.",
    image: "/images/placeholder-moment-8.jpg",
    date: "August 2023",
    category: "development",
  },
];
