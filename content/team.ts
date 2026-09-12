export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoPosition?: string;
};

export const team: TeamMember[] = [
  {
    slug: "marcus-hale",
    name: "Marcus Hale",
    role: "Head of Link Building",
    photo: "/team/nikos-papadopoulos.webp",
    bio: "Marcus has spent more than eight years leading SEO and digital PR across the United States. He steers strategy across our catalogue of 100,000+ high-authority US backlink opportunities and keeps outreach focused on desks American buyers already trust.",
  },
  {
    slug: "sofia-reyes",
    name: "Sofia Reyes",
    role: "SEO Outreach Manager",
    photo: "/team/eleni-kostas.webp",
    bio: "Sofia runs day-to-day outreach into US newsrooms, trade titles, and niche blogs. She matches every pitch to industry, audience, and destination URL so campaigns stay commercial—not just busy.",
  },
  {
    slug: "ethan-brooks",
    name: "Ethan Brooks",
    role: "Senior SEO Specialist",
    photo: "/team/dimitris-ioannou.webp",
    bio: "Ethan designs off-page strategies for competitive American verticals. His work covers prospecting, competitor backlink analysis, anchor planning, and multi-month acquisition calendars tied to Search Console priorities.",
  },
  {
    slug: "aisha-thompson",
    name: "Aisha Thompson",
    role: "Content & Editorial Manager",
    photo: "/team/maria-nikolaou.webp",
    bio: "Aisha leads writing and editorial review for contributed pieces aimed at US readers. Her journalism background shows in the insistence that every article belongs on the host—examples, tone, and sourcing included.",
  },
  {
    slug: "noah-patel",
    name: "Noah Patel",
    role: "Link Building Specialist",
    photo: "/team/giorgos-dimitriou.webp",
    bio: "Noah handles publisher negotiations from our working US site file. He is known for surfacing smaller, highly relevant American websites that add topical value instead of chasing vanity DR alone.",
  },
  {
    slug: "lauren-kim",
    name: "Lauren Kim",
    role: "Digital PR Specialist",
    photo: "/team/anna-christou.webp",
    bio: "Lauren blends classic outreach with digital PR to open coverage for brands in competitive US markets. Her desk leans on data angles, expert commentary, and genuine editorial placements.",
  },
  {
    slug: "caleb-wright",
    name: "Caleb Wright",
    role: "US SEO Manager",
    photo: "/team/panagiotis-vasileiou.webp",
    bio: "Caleb coordinates campaigns across national and regional American search—from coast-to-coast trade press to metro business titles. He adapts each plan to how US queries and buyer journeys actually behave.",
  },
  {
    slug: "diego-alvarez",
    name: "Diego Alvarez",
    role: "Publisher Relations Manager",
    photo: "/team/alexandros-petridis.webp",
    bio: "Diego maintains relationships with website owners and editors. He cycles quality reviews across Ahrefs DR and traffic, Moz DA, and Majestic TF so our 100,000+ US backlink opportunities stay current and usable for active campaigns.",
  },
];

export function getMember(slug: string) {
  return team.find((member) => member.slug === slug);
}

export function getMemberByName(name: string) {
  return team.find((member) => member.name === name);
}

export function memberEmail(name: string) {
  const parts = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.toLowerCase());
  const first = parts[0] ?? "";
  const last = parts[parts.length - 1] ?? first;
  return `${first}.${last}@site-media.co.uk`;
}

export function memberInitials(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
