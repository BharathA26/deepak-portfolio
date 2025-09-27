export type Tool = {
  id: string;
  title: string;
  subtitle: string;
  img?: string; // optional image path under public/assets/tools
  gradient?: string; // CSS gradient background
  offsetY?: number; // optional fine-tune for vertical alignment
};

export const TOOLS: Tool[] = [
  {
    id: 'photoshop',
    title: 'Photoshop',
    subtitle: 'Photo editing & digital art mastery',
    img: '/assets/Photoshop.png',
    gradient: 'linear-gradient(180deg,#1f6feb 0%,#1e3a8a 100%)',
    offsetY: -6,
  },
  {
    id: 'illustrator',
    title: 'Illustrator',
    subtitle: 'Vector graphics & logo creation',
    img: '/assets/Illustrator.png',
    gradient: 'linear-gradient(180deg,#fb923c 0%,#ef4444 100%)',
  },
  {
    id: 'coreldraw',
    title: 'CorelDraw',
    subtitle: 'Professional vector design suite',
    img: '/assets/CorelDraw.png',
    gradient: 'linear-gradient(180deg,#34d399 0%,#059669 100%)',
  },
  {
    id: 'indesign',
    title: 'InDesign',
    subtitle: 'Layout & print design excellence',
    img: '/assets/InDesign.png',
    gradient: 'linear-gradient(180deg,#f472b6 0%,#8b5cf6 100%)',
  },
  {
    id: 'figma',
    title: 'Figma',
    subtitle: 'UI/UX design & prototyping',
    img: '/assets/figma.png',
    gradient: 'linear-gradient(180deg,#6366f1 0%,#7c3aed 100%)',
  },
  {
    id: 'creative-cloud',
    title: 'Creative Cloud',
    subtitle: 'All‑in‑one creative apps for seamless workflows',
    img: '/assets/CreativeCloud.svg',
    gradient: 'linear-gradient(180deg,#ff8a00 0%,#ff3b30 100%)',
  },
];

export const TECH_CHIPS: string[] = [];
