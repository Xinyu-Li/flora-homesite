export type RegionalSite = {
  name: string;
  tagline: string;
  actionLabel: string;
  url: string;
  image: string;
};

export type FocusArea = {
  title: string;
  description: string;
  bullets: string[];
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type NewsHighlight = {
  title: string;
  date: string;
  summary: string;
  href?: string;
};

export type PartnerHighlight = {
  title: string;
  description: string;
  bullets: string[];
  actionLabel: string;
  actionUrl: string;
};

export const heroContent = {
  eyebrow: "Learning Science + Responsible AI",
  title: "FLoRA Engine",
  body: "FLoRA (Facilitating Learning Regulation and Adaptation) unites cognitive science, learning analytics, and trustworthy AI to help learners plan, monitor, and reflect with confidence. We design unobtrusive instrumentation, interpretable analytics, and adaptive feedback loops that keep humans in control while AI augments their decisions.",
  primaryCta: {
    label: "Explore Publications",
    href: "/publications",
  },
  secondaryCta: {
    label: "Meet the Team",
    href: "/team",
  },
};

export const regionalSites: RegionalSite[] = [
  {
    name: "Australia",
    tagline: "Self-regulated learning partners across K-12 and Higher Education.",
    actionLabel: "Visit Australian site",
    url: "https://www.floraengine.org/moodle/",
    image:
      "https://img.freepik.com/premium-vector/stylized-simple-outline-map-australia-icon-blue-sketch-map-australia-vector-illustration_160901-3630.jpg?w=360",
  },
  {
    name: "China",
    tagline: "Sino-Australian collaborations piloting reflective writing and apprenticeship simulations.",
    actionLabel: "Visit Chinese site",
    url: "https://yidelearn.com/moodle/",
    image:
      "https://static.vecteezy.com/system/resources/previews/008/717/307/original/stylized-simple-outline-map-of-china-icon-blue-sketch-map-of-china-illustration-vector.jpg",
  },
  {
    name: "Latin America",
    tagline: "CELLA-LALA cohort codesigns bilingual SRL coaching experiences.",
    actionLabel: "Visit Latin American site",
    url: "https://cella-lala.floraengine.org/moodle/",
    image: "https://i.pinimg.com/736x/3d/e0/57/3de057b9beab1778e598c6f2e6eaf6d0.jpg",
  },
  {
    name: "Europe",
    tagline: "Collaborative research nodes across Germany and the Netherlands.",
    actionLabel: "Explore EU deployment",
    url: "https://www.edu.sot.tum.de/en/lldm/research-projects/flora/",
    image: "https://img.freepik.com/premium-vector/europe-map-illustration_23-2147514644.jpg?w=360",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Human-AI coregulation",
    description:
      "Blending trace data, conversational interfaces, and cognitively-grounded scaffolds to keep learners in charge of their decisions.",
    bullets: [
      "LLM copilots tuned for reflective writing, inquiry, and apprenticeship simulations.",
      "Transparent analytics pipelines that surface process data rather than only outcomes.",
      "Design heuristics that make recommendations contestable and auditable.",
    ],
  },
  {
    title: "Evidence-centered instrumentation",
    description:
      "Multi-modal sensing approaches that honor privacy, minimize friction, and enrich feedback loops.",
    bullets: [
      "Temporal modeling of think-aloud data, keystrokes, and planning artifacts.",
      "Model cards that articulate provenance, performance envelopes, and risks.",
      "Rapid researcher toolkits for iterating on measures with domain experts.",
    ],
  },
  {
    title: "Adaptive scaffolding at scale",
    description:
      "Personalized nudges, check-ins, and strategy prompts triggered by verifiable signals.",
    bullets: [
      "Composable support templates for planning, monitoring, and reflection cycles.",
      "Teacher dashboards that summarize learner states and suggested interventions.",
      "Evaluation pipelines that tie support to long-term self-regulation outcomes.",
    ],
  },
];

export const metrics: Metric[] = [
  {
    label: "Learners supported",
    value: "4K+",
    detail: "Across reflective writing, STEM inquiry, and vocational coaching tasks.",
  },
  {
    label: "Research partners",
    value: "12",
    detail: "Universities and labs contributing instrumentation, analytics, and pedagogy.",
  },
  {
    label: "Publications",
    value: "35+",
    detail: "Peer-reviewed journal articles, LAK papers, and practitioner toolkits.",
  },
];

export const newsHighlights: NewsHighlight[] = [
  {
    title: "Trace-SRL workshop returns to LAK25",
    date: "Oct 2025",
    summary:
      "Hands-on sessions showcase how to translate process analytics into explainable AI scaffolds.",
    href: "https://sites.google.com/monash.edu/lak23-trace-srl",
  },
  {
    title: "NOLAI partnership expands apprenticeship pilots",
    date: "Jul 2025",
    summary:
      "A new cohort of Dutch vocational programs will pilot FLoRA's conversational coaching flows.",
  },
  {
    title: "SRL instrumentation pattern library",
    date: "Apr 2025",
    summary:
      "Reusable blueprints help learning designers combine trace data, reflection prompts, and analytics in hours, not weeks.",
  },
];

export const cellaHighlight: PartnerHighlight = {
  title: "Centre for Learning and Living with AI (CELLA)",
  description:
    "CELLA is a global research network led by Radboud University and the University of Oulu with support from the Jacobs Foundation. The center develops ethical, evidence-based AI practices that help young learners plan, monitor, and reflect while working alongside intelligent tools.",
  bullets: [
    "Co-designing bilingual SRL coaching experiences across Europe, Latin America, and Asia-Pacific.",
    "Sharing design blueprints and instrumentation schemas that connect learning science and responsible AI.",
    "Building open research infrastructure so schools can evaluate AI scaffolding with their own data.",
  ],
  actionLabel: "Visit CELLA",
  actionUrl: "https://www.cellaresearch.org/",
};
