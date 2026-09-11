export type ToolCategory = "front" | "lang" | "back" | "data" | "tools";

export const toolCategories: { id: ToolCategory | "all"; label: string; line: string }[] = [
  { id: "all", label: "Tout", line: "Tout le jardin est en fleur." },
  { id: "front", label: "Front-end", line: "Côté front : je fais briller les pixels." },
  { id: "lang", label: "Langages", line: "Les langages qui font tourner le tout." },
  { id: "back", label: "Back-end", line: "Côté serveur : robuste et carré." },
  { id: "data", label: "Données", line: "Les données, bien rangées." },
  { id: "tools", label: "Outils", line: "Les outils du quotidien." },
];

/* x / y : position en px dans le jardin de 1160 x 440 (desktop) ; size : 1 = grosse bulle, 3 = petite */
export const tools: {
  name: string;
  cat: ToolCategory;
  x: number;
  y: number;
  rot: number;
  delay: number;
  size: 1 | 2 | 3;
}[] = [
  { name: "React", cat: "front", x: 60, y: 40, rot: -3, delay: 0, size: 1 },
  { name: "Next.js", cat: "front", x: 300, y: 120, rot: 2, delay: 0.4, size: 1 },
  { name: "TypeScript", cat: "lang", x: 560, y: 30, rot: -2, delay: 0.8, size: 1 },
  { name: "JavaScript", cat: "lang", x: 830, y: 90, rot: 3, delay: 0.2, size: 1 },
  { name: "Tailwind", cat: "front", x: 120, y: 200, rot: 2, delay: 1, size: 2 },
  { name: "HTML / CSS", cat: "front", x: 390, y: 260, rot: -2, delay: 0.6, size: 3 },
  { name: "Node.js", cat: "back", x: 650, y: 180, rot: 2, delay: 1.2, size: 1 },
  { name: "Express", cat: "back", x: 910, y: 240, rot: -3, delay: 0.3, size: 2 },
  { name: "PostgreSQL", cat: "data", x: 90, y: 330, rot: 2, delay: 0.9, size: 2 },
  { name: "Prisma", cat: "data", x: 380, y: 370, rot: -2, delay: 0.5, size: 3 },
  { name: "Sequelize", cat: "data", x: 600, y: 330, rot: 3, delay: 1.4, size: 3 },
  { name: "Git & GitHub", cat: "tools", x: 830, y: 360, rot: -2, delay: 0.7, size: 3 },
  { name: "Docker", cat: "tools", x: 1030, y: 150, rot: 2, delay: 1.1, size: 3 },
];
