import ghlogo from '../assets/images/gh.jpg'
import ghmodif from '../assets/images/ghmodif.png'
import haruna from '../assets/images/haruna.jpeg'
import essy from '../assets/images/essy.png'
import idriss from '../assets/images/idriss.jpeg'
import barthez from '../assets/images/barthez.jpg'
import salle from '../assets/images/salle.jpg'
import salle1 from '../assets/images/salle1.jpg'
import salle2 from '../assets/images/salle2.jpg'
import salle3 from '../assets/images/salle3.jpg'
import salle4 from '../assets/images/salle4.jpg'
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
    image: `${salle}`,
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
    image: `${salle1}`,
    span: "col-span-1"
  }
];


export const structureGallery2 = [
  {
    id: 1,
    titre: "Salle de Code & Laboratoire Informatique",
    categorie: "Espace d'apprentissage",
    description: "Équipements récents, double écrans, fibre optique et climatisation pour un confort de travail optimal.",
    image: `${salle2}`,
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    titre: "Espace Coworking & Brainstorming",
    categorie: "Collaboration",
    description: "Un espace ouvert propice aux échanges d'idées, aux revues de sprint et au travail d'équipe.",
    image: `${salle1}`,
    span: "col-span-1"
  },
  {
    id: 3,
    titre: "Sessions de Mentorat 1-on-1",
    categorie: "Accompagnement",
    description: "Chaque stagiaire et apprenant bénéficie d'un suivi personnalisé avec un mentor senior.",
    image: `${salle4}`,
    span: "col-span-1"
  },
  {
    id: 4,
    titre: "Hackathons & Soutenances de Projets",
    categorie: "Événements Tech",
    description: "Présentations de fin de parcours devant des recruteurs, experts de l'industrie et entrepreneurs locaux.",
    image: `${salle3}`,
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 5,
    titre: "Détente & Networking Tech",
    categorie: "Communauté",
    description: "Moments d'échange conviviaux autour d'un café pour bâtir son réseau professionnel.",
    image: `${w18}`,
    span: "col-span-1"
  }
];


export const teamMembers = [
   {
    nom: "idriss-françois ELIGUENE",
    role: "Founder worketyamo |Co-Founder & CTO | Senior DevSecOps Engineer | SRE | Cloud & Platform Engineering | Linux & Kubernetes Security | Go | ISO 27001 Practitioner | MBA",
    // specialite: "React, Node.js, Cloud Architecture, DevOps",
    image: `${idriss}`,
    bio: "Fondateur & Directeur de la Technologie (CTO) chez Worketyamo. Expert Senior en Sécurité Cloud & Ingénierie Plateforme | Mentor Tech engagé pour l'autonomisation de la jeunesse camerounaise."
  },
  {
    nom: "Haruna Rashid Yakubu",
    role: "DevOps Engineering Manager | Certified Solution Architect Professional | Cloud Native Architect | Tech Former",
    // specialite: "React, Node.js, Cloud Architecture, DevOps",
    image: `${haruna}`,
    bio: "Formateur Principal Tech & Cloud chez Worketyamo | Ingénieur DevOps Senior chez Kaeyros Analytics. Professionnel certifié et passionné par la transmission des compétences technologiques d'élite pour propulser la jeunesse camerounaise.."
  },
  {
    nom: "Sylviane Essi",
    role: "Responsable Pédagogique & Directrice",
    // specialite: "UI/UX Architecture, Next.js, Flutter",
    image: `${essy}`,
    bio: "Directrice Générale & Responsable Pédagogique chez Worketyamo. Pilote stratégique de la formation, gestionnaire administrative et accompagnatrice bienveillante pour les apprenants en reconversion professionnelle."
  },
  {
    nom: "Ghislain Ateba",
    role: "Trainer & Fullstack and Mobile Developer",
    // specialite: "React, NodeJs, Express, MongoDB, SQL",
    image: `${ghmodif}`,
    bio: "Formateur & Développeur Fullstack et Mobile chez Worketyamo. Responsable Technique Cloud-Dev et Infrastructure Pédagogique"
  },
  {
    nom: "Barthez",
    role: "Trainer & Fullstack Develope",
    // specialite: "React, NodeJs, Express, MongoDB Power BI, SQL",
    image: `${barthez}`,
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
