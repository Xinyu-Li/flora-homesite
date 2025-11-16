export type TeamMember = {
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  link: string;
  photo: string;
};

export const coreTeam: TeamMember[] = [
  {
    name: "Dragan Gasevic",
    title: "Distinguished Professor of Learning Analytics",
    affiliation: "Monash University",
    bio: "Leads the Centre for Learning Analytics (CoLAM) and investigates how data, AI, and thoughtful design can strengthen self-regulated and collaborative learning.",
    link: "https://research.monash.edu/en/persons/dragan-gasevic",
    photo:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Q4Nm22sAAAAJ&citpid=3",
  },
  {
    name: "Maria Bannert",
    title: "Professor of Teaching and Learning with Digital Media",
    affiliation: "Technical University of Munich",
    bio: "Studies the psychological foundations of how learners plan, monitor, and adapt when supported by digital media and analytics.",
    link: "https://www.professoren.tum.de/en/bannert-maria",
    photo: "https://www.digitus.uni-muenchen.de/bilder/Bilder-quadratisch/bannert.jpg",
  },
  {
    name: "Inge Molenaar",
    title: "Professor of Education and Artificial Intelligence",
    affiliation: "Radboud University Nijmegen",
    bio: "Directs the National Education Lab AI (NOLAI) and advances responsible instrumentation and adaptation for classrooms at scale.",
    link: "https://www.ru.nl/en/people/molenaar-i",
    photo: "https://old.jacobsfoundation.org/app/uploads/2020/11/20201011_jf_Molenaar.jpg",
  },
  {
    name: "Yizhou Fan",
    title: "Assistant Professor",
    affiliation: "Peking University",
    bio: "Explores measurement validity for SRL, combining multi-channel trace data with linguistic analytics.",
    link: "https://scholar.google.com/citations?user=EBZdbGwAAAAJ&hl=en",
    photo:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=EBZdbGwAAAAJ&citpid=4",
  },
  {
    name: "Joep van der Graaf",
    title: "Assistant Professor",
    affiliation: "Radboud University Nijmegen",
    bio: "Examines self-directed learning processes and how innovative analytics can reveal planning and strategy use.",
    link: "https://www.ru.nl/en/people/graaf-j-van-der",
    photo: "https://i1.rgstatic.net/ii/profile.image/935659476885508-1600090011485_Q512/Joep-Van-Der-Graaf.jpg",
  },
  {
    name: "Mladen Rakovic",
    title: "Lecturer",
    affiliation: "Monash University",
    bio: "Builds writing analytics that surface discourse moves, metacognition, and SRL behaviors in real time.",
    link: "https://research.monash.edu/en/persons/mladen-rakovic",
    photo: "https://www.monash.edu/__data/assets/image/0019/2400472/mladen_rakovic.jpg",
  },
  {
    name: "Xinyu Li",
    title: "Research Fellow & Senior Software Developer",
    affiliation: "Monash University",
    bio: "Ships the production FLoRA platform, ensuring privacy-safe instrumentation and scalable AI services.",
    link: "https://scholar.google.com.au/citations?user=fY7vKpkAAAAJ&hl=en",
    photo:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=fY7vKpkAAAAJ&citpid=2",
  },
  {
    name: "Lyn Lim",
    title: "Research Fellow",
    affiliation: "Technical University of Munich",
    bio: "Connects psychology, education, and design to shape interventions that nurture self-regulation habits.",
    link: "https://www.edu.sot.tum.de/en/lldm/team/lim-lyn/",
    photo:
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=p5jcPeEAAAAJ&citpid=1",
  },
];
