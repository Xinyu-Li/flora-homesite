export type NewsItem = {
  title: string;
  date: string;
  description: string;
  link?: string;
  location?: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Trace-SRL workshop returns to LAK25",
    date: "November 2025",
    location: "Stellenbosch, South Africa",
    description:
      "We are curating hands-on labs that show how to translate trace data into contestable analytics and AI scaffolds. Proposals for mini-tutorials are open until January.",
    link: "https://sites.google.com/monash.edu/lak23-trace-srl",
  },
  {
    title: "NOLAI x FLoRA apprenticeship pilots",
    date: "July 2025",
    location: "Netherlands (multiple colleges)",
    description:
      "A new cohort of vocational programs is rolling out conversational coaching flows that help apprentices plan, monitor, and reflect while on the job floor.",
  },
  {
    title: "SRL instrumentation pattern library v2",
    date: "April 2025",
    location: "Monash University",
    description:
      "We released reusable instrumentation recipes (keystrokes, planning canvases, protocol captures) together with ethics guardrails and deployment checklists.",
  },
  {
    title: "Teacher dashboards for dialogic feedback",
    date: "January 2025",
    location: "Melbourne, Australia",
    description:
      "New analytics views help educators interpret SRL cues in blended classrooms and seed low-lift interventions.",
  },
];
