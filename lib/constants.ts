import type { Project, SkillGroup, Stage, VeilleTimelineItem } from "@/lib/types";

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil", id: "accueil" },
  { label: "CV", href: "#cv", id: "cv" },
  { label: "Projets", href: "#projets", id: "projets" },
  { label: "Stages", href: "#stages", id: "stages" },
  { label: "Veille", href: "#veille", id: "veille" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const CV_PDF_PATH = "/cv-julien-vielle.pdf";

export const SITE = {
  name: "Julien Vielle",
  initials: "JV",
  role: "Étudiant BTS SIO SLAM — Développeur web & applicatif",
  tagline:
    "Étudiant en BTS SIO option SLAM, orienté développement web et applicatif. Curieux, autonome et motivé, je construis des solutions fiables du réseau au code métier.",
  email: "julienvielle96@gmail.com",
  location: "Pau, Nouvelle-Aquitaine",
  school: "Lycée Saint-John Perse, Pau",
} as const;

export const PROFILE = {
  summary:
    "Étudiant en BTS SIO option SLAM, orienté développement web et applicatif. Curieux, autonome et motivé, avec une expérience concrète en stage aux PEP64 (réseau sécurisé RADIUS et portail intranet ASP.NET Core MVC).",
} as const;

export const EDUCATION = {
  diploma: "BTS SIO — Option SLAM",
  school: "Lycée Saint-John Perse",
  city: "Pau",
  period: "2024 — 2026",
  description:
    "Solutions Logicielles et Applications Métiers : développement web, applicatif, bases de données, gestion de projet et culture professionnelle.",
} as const;

export const EXPERIENCES: {
  period: string;
  title: string;
  org: string;
  location: string;
  description: string;
  slug?: string;
}[] = [
  {
    period: "5 janv. — 13 févr. 2026",
    title: "Stage 2ème année — Portail intranet ASP.NET Core MVC",
    org: "PEP64",
    location: "Billère",
    description:
      "Conception et développement d'un portail intranet pour les collaborateurs : MVC, Entity Framework Core, SQL Server, modules FAQ, actualités, sondages et back-office.",
    slug: "pep64-portail-intranet",
  },
  {
    period: "26 mai — 27 juin 2025",
    title: "Stage 1ère année — Authentification Wi-Fi RADIUS/NPS",
    org: "PEP64",
    location: "Billère",
    description:
      "Mise en place d'une authentification Wi-Fi sécurisée via RADIUS/NPS intégrée à Active Directory, tests terrain et documentation technique HTML/CSS.",
    slug: "pep64-radius-wifi",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Développement web",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "ASP.NET Core MVC"],
  },
  {
    category: "Bases de données",
    items: ["SQL", "MySQL", "SQL Server", "Entity Framework Core", "PDO", "DAO"],
  },
  {
    category: "Langages & mobile",
    items: ["Java", "C#", "Android"],
  },
  {
    category: "Réseau & système",
    items: [
      "Windows Server",
      "Active Directory",
      "IIS",
      "NPS",
      "RADIUS",
      "LDAP",
      "WPA2-Enterprise",
    ],
  },
  {
    category: "Outils & méthodes",
    items: [
      "Git",
      "GitHub",
      "Visual Studio",
      "VS Code",
      "Android Studio",
      "Agile",
      "SCRUM",
    ],
  },
];

export const HERO_STATS = [
  { label: "Projets", value: "5", trend: "BTS & perso" },
  { label: "Stages", value: "2", trend: "PEP64" },
  { label: "Formation", value: "BTS", trend: "SIO SLAM" },
] as const;

export const TECH_STACK = [
  "TypeScript",
  "Next.js",
  "C#",
  "ASP.NET",
  "PHP",
  "SQL Server",
  "Active Directory",
  "Git",
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "projet-fa",
    title: "Site de billetterie — Parc archéologique",
    type: "Projet BTS SIO SLAM",
    shortDescription:
      "Création d'un site de billetterie en ligne pour un parc/musée archéologique : événements, réservations, QR code et contact.",
    stack: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "PDO",
      "DAO",
      "MVC",
      "GitHub",
      "Agile/SCRUM",
    ],
    image: "from-accent/25 via-primary/50 to-background-deep",
    github: null,
    demo: null,
    featured: true,
    detail: {
      context:
        "Projet de fin de formation BTS SIO SLAM réalisé en équipe pour un parc/musée archéologique fictif nécessitant une billetterie en ligne professionnelle.",
      objective:
        "Permettre aux visiteurs de consulter les événements, réserver des places, obtenir un billet avec QR code et contacter l'établissement, tout en garantissant une architecture maintenable.",
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "PDO",
        "DAO",
        "MVC",
        "GitHub",
        "Méthode Agile/SCRUM",
      ],
      missions: [
        "Analyse des besoins et rédaction du cahier des charges",
        "Modélisation de la base de données (événements, réservations, utilisateurs)",
        "Développement de l'architecture DAO/MVC en PHP",
        "Accès aux données via PDO avec requêtes préparées",
        "Gestion des événements et créneaux de visite",
        "Système de réservation et génération de QR code",
        "Formulaire de contact et pages vitrine",
        "Travail collaboratif via GitHub et sprints SCRUM",
      ],
      challenges: [
        "Séparation claire des responsabilités entre couches (DAO, modèle, contrôleur, vue)",
        "Gestion des disponibilités et conflits de réservation",
        "Sécurisation des entrées utilisateur et des accès base de données",
      ],
      solutions: [
        "Pattern DAO pour isoler l'accès aux données",
        "Architecture MVC pour structurer l'application",
        "Requêtes préparées PDO contre les injections SQL",
        "Répartition des tâches en équipe selon Agile/SCRUM",
      ],
      skillsDeveloped: [
        "Architecture web PHP structurée",
        "Modélisation SQL et accès PDO",
        "Travail en équipe et gestion de versions Git",
        "Approche projet Agile/SCRUM",
      ],
    },
  },
  {
    slug: "android-visiteur-dao",
    title: "Application Android — Gestion visiteurs (DAO)",
    type: "Projet BTS SIO SLAM",
    shortDescription:
      "Application Android utilisant le design pattern DAO pour séparer la logique métier de l'accès aux données (CRUD visiteurs).",
    stack: ["Java", "Android Studio", "DAO", "SQLite", "CRUD"],
    image: "from-secondary/15 via-primary/45 to-accent/20",
    github: null,
    demo: null,
    featured: false,
    detail: {
      context:
        "Projet BTS SIO SLAM visant à maîtriser le pattern DAO sur Android avec une application de gestion de visiteurs.",
      objective:
        "Créer une application mobile permettant l'authentification, la gestion CRUD des visiteurs et un accès aux données découplé de l'interface.",
      technologies: ["Java", "Android Studio", "DAO", "SQLite", "CRUD"],
      missions: [
        "Conception de l'interface de connexion",
        "Implémentation du pattern DAO (Data Access Object)",
        "Création des opérations CRUD sur les visiteurs",
        "Stockage local SQLite",
        "Séparation logique métier / accès données / présentation",
      ],
      challenges: [
        "Respect du pattern DAO sur mobile",
        "Gestion du cycle de vie Android et persistance locale",
        "Organisation du code pour maintenabilité",
      ],
      solutions: [
        "Couche DAO dédiée aux requêtes SQLite",
        "Modèles et services métier distincts des Activities",
        "Tests manuels des scénarios CRUD",
      ],
      skillsDeveloped: [
        "Développement Android en Java",
        "Pattern DAO et bonnes pratiques de séparation",
        "Gestion de base locale SQLite",
      ],
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio Julien Vielle",
    type: "Projet personnel",
    shortDescription:
      "Ce portfolio : identité graphique premium, Next.js 16, TypeScript, Tailwind CSS, Framer Motion et pages dynamiques.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "from-accent/30 via-primary/40 to-secondary/10",
    github: null,
    demo: null,
    featured: true,
    detail: {
      context:
        "Projet personnel visant à présenter mon parcours BTS SIO SLAM, mes stages PEP64 et mes réalisations avec une identité visuelle unique.",
      objective:
        "Créer un portfolio professionnel, mémorable et responsive, avec contenu structuré et pages détail pour projets et stages.",
      technologies: [
        "Next.js 16",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "App Router",
      ],
      missions: [
        "Définition de la charte graphique (#141a26, #2a3248, #a8d3f0, #0e65a9)",
        "Architecture composants réutilisables (layout, ui, sections)",
        "Hero asymétrique et fond ambient (blobs, glassmorphism)",
        "Pages dynamiques /projets/[slug] et /stages/[slug]",
        "Section veille technologique complète sur Rust",
        "Animations Framer Motion et responsive mobile/desktop",
      ],
      challenges: [
        "Éviter un rendu générique type template gaming",
        "Structurer de grandes quantités de contenu sans surcharge visuelle",
        "Typage TypeScript strict pour les données",
      ],
      solutions: [
        "Direction artistique inspirée Linear/Apple (sobre, premium)",
        "Centralisation des données dans lib/constants.ts",
        "Composants Motion et DetailLayout réutilisables",
      ],
      skillsDeveloped: [
        "Next.js App Router et TypeScript",
        "Design system Tailwind personnalisé",
        "UX/UI premium et accessibilité",
      ],
    },
  },
  {
    slug: "documentation-radius",
    title: "Documentation RADIUS/NPS",
    type: "Projet de stage PEP64",
    shortDescription:
      "Site documentaire HTML/CSS expliquant la configuration RADIUS/NPS pour les équipes techniques des PEP64.",
    stack: ["HTML", "CSS", "Documentation technique"],
    image: "from-primary/55 via-background to-accent/15",
    github: null,
    demo: null,
    featured: false,
    detail: {
      context:
        "Livrable du stage 1ère année aux PEP64 (Billère) : documenter la mise en place de l'authentification Wi-Fi sécurisée pour les techniciens.",
      objective:
        "Produire une documentation claire et accessible : prérequis, installation, configuration, tests et dépannage de la solution RADIUS/NPS.",
      technologies: [
        "HTML",
        "CSS",
        "Windows Server 2019",
        "NPS",
        "RADIUS",
        "Active Directory",
      ],
      missions: [
        "Rédaction des prérequis infrastructure",
        "Documentation de l'installation du rôle NPS",
        "Explication de l'intégration Active Directory et stratégies réseau",
        "Procédures de tests d'authentification Wi-Fi",
        "Section dépannage (certificats, logs, IP fixe)",
        "Captures d'écran et mise en forme CSS",
      ],
      challenges: [
        "Rendre compréhensible une infrastructure réseau complexe",
        "Documenter des problèmes rencontrés (certificats SSL/TLS, IP dynamique)",
      ],
      solutions: [
        "Structure par chapitres progressifs",
        "Schémas et captures annotées",
        "Guide de dépannage basé sur l'expérience terrain",
      ],
      skillsDeveloped: [
        "Documentation technique web",
        "Communication vers public non développeur",
        "Synthèse de projet infrastructure",
      ],
      source: "Rapport de stage Julien Vielle — PEP64, 2025.",
    },
  },
  {
    slug: "locaboard",
    title: "Locaboard",
    type: "Projet web / application de gestion",
    shortDescription:
      "Application web de gestion et suivi de locations/réservations : interface moderne, organisation des données et contenus dynamiques.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "Git"],
    image: "from-secondary/20 via-accent/25 to-primary/50",
    github: null,
    demo: null,
    liveUrl: "#",
    featured: true,
    detail: {
      context:
        "Projet web orienté gestion locative : concevoir une application permettant de centraliser les locations, les réservations et le suivi des biens avec une interface claire pour les utilisateurs.",
      objective:
        "Offrir un outil fiable pour organiser les données de location, fluidifier le suivi des réservations et proposer une expérience utilisateur moderne, intuitive et évolutive.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Architecture MVC",
        "Git",
      ],
      missions: [],
      features: [
        "Tableau de bord synthétique (locations, réservations, statuts)",
        "Gestion des biens et des locataires",
        "Création et suivi des réservations / locations",
        "Filtrage et recherche dynamique des contenus",
        "Interface responsive et navigation intuitive",
        "Mise à jour dynamique des données affichées",
      ],
      challenges: [
        "Structuration de la base de données (relations locations, clients, réservations)",
        "Cohérence entre interface et logique métier côté serveur",
        "Gestion des états (disponible, réservé, en cours, terminé)",
        "Ergonomie de l'interface pour un usage quotidien",
      ],
      solutions: [
        "Modèle de données relationnel MySQL avec clés étrangères",
        "Séparation MVC (vues, contrôleurs, accès données)",
        "Composants d'interface réutilisables et feedback visuel (statuts, badges)",
        "Tests progressifs des parcours utilisateur (création, modification, consultation)",
      ],
      skillsDeveloped: [
        "Développement web full-stack (front + back PHP)",
        "Modélisation SQL et requêtes métier",
        "UX/UI d'application de gestion",
        "Organisation de projet et versioning Git",
      ],
    },
  },
];

export const STAGES: Stage[] = [
  {
    slug: "pep64-radius-wifi",
    period: "26 mai — 27 juin 2025",
    company: "PEP64",
    location: "Billère",
    role: "Stage 1ère année BTS SIO SLAM — Authentification Wi-Fi RADIUS/NPS",
    shortDescription:
      "Mise en place d'une authentification Wi-Fi sécurisée via RADIUS/NPS, intégrée à Active Directory, avec documentation technique web.",
    tags: [
      "Windows Server",
      "NPS",
      "RADIUS",
      "Active Directory",
      "WPA2-Enterprise",
      "HTML/CSS",
    ],
    detail: {
      context:
        "Stage de première année BTS SIO SLAM réalisé aux PEP64 à Billère, structure accompagnant des personnes en situation de handicap.",
      objective:
        "Sécuriser l'accès Wi-Fi des collaborateurs via une authentification centralisée RADIUS/NPS liée à Active Directory.",
      technologies: [
        "Windows Server 2019",
        "NPS",
        "RADIUS",
        "Active Directory",
        "LDAP",
        "Certificats SSL/TLS",
        "WPA2-Enterprise",
        "PEAP",
        "EAP-TLS",
        "HTML/CSS",
      ],
      missions: [
        "Étude de l'infrastructure réseau existante",
        "Installation et configuration du rôle NPS (Network Policy Server)",
        "Intégration à Active Directory",
        "Configuration des stratégies réseau et politiques d'accès",
        "Tests d'authentification Wi-Fi",
        "Préparation de postes clients",
        "Interventions terrain auprès des utilisateurs",
        "Réalisation d'une documentation technique web en HTML/CSS",
      ],
      challenges: [
        "Gestion des certificats SSL/TLS",
        "IP dynamique de la machine virtuelle",
        "Configuration fine RADIUS/NPS et politiques réseau",
      ],
      solutions: [
        "Configuration d'une IP fixe sur la VM",
        "Analyse des logs NPS et événements Windows",
        "Tests progressifs avant déploiement terrain",
        "Documentation structurée pour la reprise par l'équipe",
      ],
      skillsDeveloped: [
        "Administration Windows Server et Active Directory",
        "Sécurisation réseau Wi-Fi entreprise",
        "Rédaction de documentation technique",
        "Intervention terrain et relation utilisateur",
      ],
      source: "Rapport de stage Julien Vielle — PEP64, 2025.",
    },
  },
  {
    slug: "pep64-portail-intranet",
    period: "5 janvier — 13 février 2026",
    company: "PEP64",
    location: "Billère",
    role: "Stage 2ème année BTS SIO SLAM — Portail intranet ASP.NET Core MVC",
    shortDescription:
      "Conception et développement d'un portail intranet pour collaborateurs : MVC, EF Core, FAQ, actualités, sondages et back-office.",
    tags: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "IIS",
      "Active Directory",
    ],
    detail: {
      context:
        "Stage de deuxième année BTS SIO SLAM aux PEP64 : moderniser l'accès aux ressources internes via un portail intranet dédié.",
      objective:
        "Concevoir et développer un portail intranet intégrant la charte PEP64, des modules métiers et un back-office d'administration, avec préparation de l'authentification AD.",
      technologies: [
        "ASP.NET Core MVC",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "Visual Studio",
        "IIS",
        "Active Directory",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      missions: [
        "Création de l'architecture MVC",
        "Intégration de la charte graphique PEP64",
        "Création des premières maquettes",
        "Module FAQ",
        "Module actualités",
        "Gestion des applications métiers",
        "Upload d'images et pièces jointes",
        "Système de sondage",
        "Back-office d'administration",
        "Préparation de l'intégration Active Directory",
      ],
      challenges: [
        "Erreurs Entity Framework Core (relations, migrations)",
        "Relations Include / ThenInclude complexes",
        "Vues MVC introuvables ou mal référencées",
        "Gestion des fichiers uploadés",
        "Gestion des rôles admin / super admin",
      ],
      solutions: [
        "Correction et simplification des modèles EF Core",
        "Restructuration des contrôleurs et vues",
        "Clarification des rôles et permissions",
        "Synchronisation fichiers / base de données",
        "Amélioration progressive de l'UX",
      ],
      skillsDeveloped: [
        "Développement ASP.NET Core MVC",
        "Entity Framework Core et SQL Server",
        "Gestion de projet applicatif en entreprise",
        "Back-office et expérience administrateur",
      ],
      source: "Journal de bord stage 2 — Julien Vielle, PEP64, 2026.",
    },
  },
];

export const VEILLE = {
  subject: "Le langage Rust et son évolution dans le développement logiciel moderne",
  problematique:
    "Pourquoi Rust est-il de plus en plus utilisé pour développer des logiciels performants, fiables et sécurisés ?",
  definition:
    "La veille technologique consiste à surveiller de façon régulière et structurée l'évolution des technologies, outils et pratiques du secteur informatique, afin d'anticiper les changements, enrichir ses compétences et justifier des choix techniques en projet ou en entreprise.",
  objectives: [
    "Comprendre les fondements de Rust (sécurité mémoire, performance, concurrence)",
    "Analyser son adoption par l'industrie (Microsoft, Google, AWS, Mozilla)",
    "Identifier les cas d'usage : système, backend web, cloud, cybersécurité",
    "Comparer Rust à C/C++ sur la sécurité mémoire",
    "Structurer une méthode de veille reproductible",
  ],
  sources: [
    { name: "Site officiel Rust", url: "https://www.rust-lang.org/" },
    { name: "Rust Blog", url: "https://blog.rust-lang.org/" },
    { name: "GitHub — The Rust Programming Language", url: "https://github.com/rust-lang/rust" },
    {
      name: "Microsoft Security Blog",
      url: "https://www.microsoft.com/en-us/security/blog/",
    },
    { name: "AWS Blog — Open Source", url: "https://aws.amazon.com/blogs/opensource/" },
    {
      name: "Google Open Source Blog",
      url: "https://opensource.googleblog.com/",
    },
    { name: "Documentation The Rust Book", url: "https://doc.rust-lang.org/book/" },
  ],
  tools: [
    "Flux RSS (Rust Blog, blogs cloud)",
    "GitHub — dépôts tendances et releases",
    "Google Alerts / recherches ciblées",
    "Documentation officielle et RFC Rust",
    "Articles techniques (blog.openreplay, dev.to, etc.)",
  ],
  collectionMethod:
    "Collecte hebdomadaire : lecture des annonces officielles (releases, éditions Rust), suivi des blogs sécurité/cloud, consultation de la documentation et prise de notes structurées par thème (langage, écosystème, adoption entreprise).",
  selectionCriteria: [
    "Source officielle ou éditeur reconnu (Mozilla, Microsoft, AWS, Google)",
    "Actualité datée et vérifiable",
    "Impact mesurable sur l'industrie ou la sécurité",
    "Pertinence pour le développement système, web backend ou cloud",
    "Absence de contenu promotionnel non sourcé",
  ],
  axes: [
    {
      title: "Sécurité mémoire",
      content:
        "Rust garantit la sûreté mémoire à la compilation via le borrow checker, éliminant une large part des failles classiques (buffer overflow, use-after-free) sans garbage collector.",
    },
    {
      title: "Performance",
      content:
        "Performances proches du C/C++ grâce à l'absence de GC, au zero-cost abstractions et à LLVM, tout en conservant des abstractions haut niveau.",
    },
    {
      title: "Concurrence",
      content:
        "Le modèle de ownership rend la concurrence plus sûre ; les crates async (tokio) positionnent Rust sur le backend haute charge.",
    },
    {
      title: "Adoption entreprise",
      content:
        "Microsoft (Windows, sécurité), Google (Android, Fuchsia), AWS (Firecracker, Bottlerocket), Meta, Cloudflare — Rust devient un standard pour l'infrastructure critique.",
    },
    {
      title: "Comparaison C/C++",
      content:
        "Rust offre une sûreté mémoire par défaut là où C/C++ reposent sur la discipline du développeur ; le coût d'apprentissage est compensé par la réduction des bugs en production.",
    },
  ],
  synthesis:
    "Rust répond à un besoin industriel clair : des logiciels rapides, fiables et sécurisés. Son écosystème mature (Cargo, crates.io), son adoption par les géants du numérique et ses garanties à la compilation en font un langage stratégique pour le système, le backend, le cloud et la cybersécurité. La courbe d'apprentissage reste exigeante, mais le retour sur investissement se mesure en stabilité et maintenance réduite.",
  conclusion:
    "Ma veille sur Rust confirme qu'il n'est pas une simple tendance, mais une réponse structurée aux limites de C/C++ en environnement critique. En tant qu'étudiant BTS SIO SLAM, je m'y intéresse pour élargir ma culture technique, comprendre les enjeux de sécurité mémoire et anticiper les stacks utilisées en infrastructure et en développement backend moderne.",
} as const;

export const VEILLE_TIMELINE: VeilleTimelineItem[] = [
  {
    date: "Février 2026",
    title: "Rust 1.93 — stabilisation et ergonomie",
    summary:
      "La version 1.93 apporte des améliorations de l'écosystème standard et renforce la stabilité pour les projets en production.",
    source: "Rust Blog",
    sourceUrl: "https://blog.rust-lang.org/",
    impact: "Confirme la maturité du langage pour un usage industriel continu.",
  },
  {
    date: "2025 — 2026",
    title: "Adoption cloud & sécurité (AWS, Microsoft)",
    summary:
      "AWS et Microsoft poursuivent l'intégration de Rust dans l'infrastructure (Firecracker, composants sécurité Windows) pour réduire les surfaces d'attaque.",
    source: "AWS Blog / Microsoft Security Blog",
    sourceUrl: "https://aws.amazon.com/blogs/opensource/",
    impact: "Positionne Rust comme langage de confiance pour l'infrastructure critique.",
  },
  {
    date: "2025",
    title: "Rust sur Android & systèmes embarqués (Google)",
    summary:
      "Google renforce l'usage de Rust dans Android et les projets système pour limiter les vulnérabilités mémoire natives.",
    source: "Google Open Source Blog",
    sourceUrl: "https://opensource.googleblog.com/",
    impact: "Élargit Rust au-delà du serveur, vers le mobile et l'embarqué.",
  },
  {
    date: "2024 — 2025",
    title: "Écosystème async (Tokio) et backend web",
    summary:
      "L'écosystème async mature (Tokio, Axum, Actix) place Rust comme alternative performante aux stacks Node/Go pour APIs et microservices.",
    source: "Documentation & communauté crates.io",
    sourceUrl: "https://crates.io/",
    impact: "Ouvre Rust au développement backend web haute performance.",
  },
  {
    date: "2024",
    title: "Comparaisons sécurité mémoire vs C/C++",
    summary:
      "Études et retours d'expérience industrie : réduction mesurable de certaines classes de CVE grâce au borrow checker.",
    source: "Articles techniques & blogs sécurité",
    impact: "Justifie la migration progressive de composants critiques vers Rust.",
  },
];

export const CONTACT_LINKS = [
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Email", href: `mailto:${SITE.email}`, external: false },
] as const;
