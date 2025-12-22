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
    name: "Oceania",
    tagline: "Self-regulated learning partners across K-12 and Higher Education in Australia and New Zealand.",
    actionLabel: "Explore Oceania",
    url: "https://www.floraengine.org/moodle",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Oceania_%28orthographic_projection%29.svg",
  },
  {
    name: "Europe",
    tagline: "Collaborative research nodes across Germany, Netherlands, and Nordic countries.",
    actionLabel: "Explore Europe",
    url: "https://nijmegen.floraproject.org/moodle",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg",
  },
  {
    name: "Middle East",
    tagline: "Emerging partnerships advancing SRL research in Gulf and Levant regions.",
    actionLabel: "Explore Middle East",
    url: "https://ar.floraengine.org/moodle",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Middle_East_%28orthographic_projection%29.svg",
  },
  {
    name: "Asia",
    tagline: "Sino-Australian collaborations piloting reflective writing and apprenticeship simulations.",
    actionLabel: "Explore Asia",
    url: "https://asia.floraengine.org/moodle",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Asia_%28orthographic_projection%29.svg",
  },
  {
    name: "Americas",
    tagline: "CELLA-LALA cohort codesigns bilingual SRL coaching experiences across North and South America.",
    actionLabel: "Explore Americas",
    url: "https://cella-lala.floraengine.org/moodle",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Americas_%28orthographic_projection%29.svg",
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
    value: "50K+",
    detail: "Across reflective writing, STEM inquiry, and vocational coaching tasks.",
  },
  {
    label: "Research partners",
    value: "50+",
    detail: "Universities and labs contributing instrumentation, analytics, and pedagogy.",
  },
  {
    label: "Publications",
    value: "100+",
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
