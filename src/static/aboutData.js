import ghlogo from '../assets/images/gh.jpg'
import ghmodif from '../assets/images/ghmodif.png'
import gh from '../assets/images/gh2.jpg'
import w11 from '../assets/images/w11.jpg'
import w13 from '../assets/images/w13.jpg'
import w14 from '../assets/images/w14.jpg'
import w16 from '../assets/images/w16.jpg'
import w18 from '../assets/images/w18.jpg'



export const structureGallery = [
  {
    id: 1,
    titre: "Salle de Code & Laboratoire Informatique",
    categorie: "Espace d'apprentissage",
    description: "Équipements récents, double écrans, fibre optique et climatisation pour un confort de travail optimal.",
    image: `${w11}`,
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    titre: "Espace Coworking & Brainstorming",
    categorie: "Collaboration",
    description: "Un espace ouvert propice aux échanges d'idées, aux revues de sprint et au travail d'équipe.",
    image: `${w16}`,
    span: "col-span-1"
  },
  {
    id: 3,
    titre: "Sessions de Mentorat 1-on-1",
    categorie: "Accompagnement",
    description: "Chaque stagiaire et apprenant bénéficie d'un suivi personnalisé avec un mentor senior.",
    image: `${w13}`,
    span: "col-span-1"
  },
  {
    id: 4,
    titre: "Hackathons & Soutenances de Projets",
    categorie: "Événements Tech",
    description: "Présentations de fin de parcours devant des recruteurs, experts de l'industrie et entrepreneurs locaux.",
    image: `${w18}`,
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 5,
    titre: "Détente & Networking Tech",
    categorie: "Communauté",
    description: "Moments d'échange conviviaux autour d'un café pour bâtir son réseau professionnel.",
    image: `${w14}`,
    span: "col-span-1"
  }
];

export const teamMembers = [
  {
    nom: "Ghislain Ateba",
    role: "Fondateur & Lead Fullstack Architect",
    specialite: "React, Node.js, Cloud Architecture, DevOps",
    image: `${gh}`,
    bio: "Passionné par l'autonomisation de la jeunesse camerounaise par le code et la transmission de compétences tech à fort impact."
  },
  {
    nom: "Marcelle Fotso",
    role: "Responsable Pédagogique & Senior Frontend Engineer",
    specialite: "UI/UX Architecture, Next.js, Flutter",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Experte en ingénierie d'interfaces modernes et accompagnatrice bienveillante pour les apprenants en reconversion."
  },
  {
    nom: "Arnaud Tchapda",
    role: "DevOps & Cloud Infrastructure Lead",
    specialite: "Docker, Kubernetes, AWS, Linux Kernel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Ancien administrateur système télécoms, il forme nos futurs experts aux standards mondiaux de l'infrastructure logicielle."
  },
  {
    nom: "Sandra Ngo",
    role: "Data Scientist & Coordinatrice des Stages",
    specialite: "Python, Machine Learning, Power BI, SQL",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Assure le suivi individualisé de chaque stagiaire académique pour la réussite de leurs mémoires et projets."
  }
];

export const testimonials = [
  {
    id: 1,
    nom: "Ghislain Ateba",
    role: "Développeur web fullstack & Mobile",
    texte: "Worketyamo a transformé ma carrière. En 8 mois à Melen, je suis passé de zéro connaissance en code à mon premier CDI de développeur. Les projets pratiques font toute la différence !",
    note: 5,
    avatar: `${ghmodif}`
  },
  {
    id: 2,
    nom: "Sylvain",
    role: "Stagiaire Académique (ENSPY)",
    promo: "Stage 2026",
    texte: "J'ai effectué mon stage académique chez Worketyamo pour valider mon diplôme d'ingénieur. L'encadrement sur mon application mobile et l'appui pour mon mémoire ont été exceptionnels. Mention Très Bien obtenue !",
    note: 5,
    avatar: `${w14}`
  },
  {
    id: 3,
    nom: "Dylanne makwassa",
    role: "DevOps Junior",
    promo: "Formation En Ligne & Mentorat",
    texte: "J'ai suivi la formation DevOps en ligne depuis Douala avec le support WhatsApp. Les réponses des formateurs étaient quasi instantanées. J'ai déployé mes premiers clusters Kubernetes en moins de 3 mois.",
    note: 5,
    avatar: `${w13}`
  }
];
