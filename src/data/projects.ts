export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  tags: string[];
  githubLink: string;
  githubLinkBack?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: "mixone",
    title: "MixOne",
    description:
      "Marketplace de réservation de studios de musique — Un AirBnB spécialisé pour l'industrie musicale.",
    longDescription:
      "MixOne est une plateforme de mise en relation innovante conçue pour l'industrie musicale. À la manière d'un \"AirBnB\" spécialisé, elle permet aux artistes de trouver, comparer et réserver des studios d'enregistrement, de mixage ou de mastering partout en France. Le projet inclut un algorithme de géolocalisation avec calcul de distance en temps réel, des filtres dynamiques (prix, équipements, services), une pagination robuste préservant les paramètres de recherche, une messagerie intégrée entre artistes et propriétaires de studios, ainsi que des dashboards personnalisés. L'architecture suit l'approche Laravel Actions pour séparer la logique métier des contrôleurs, garantissant un code propre et maintenable. Le projet est actuellement en phase Bêta avec des prochaines étapes incluant l'intégration Stripe et un calendrier de réservation en temps réel.",
    images: [
      "/images/mixone-0.svg",
      "/images/mixone-1.png",
    ],
    tags: ["Laravel 10", "PHP", "MySQL", "Blade", "JavaScript", "CSS"],
    githubLink: "https://github.com/EliasL94/MixOne/tree/dev",
    demoLink: "https://mixone.up.railway.app",
  },
  {
    id: "toile-de-maitre",
    title: "Toile de Maître",
    description:
      "Site vitrine premium pour une SAS spécialisée en maçonnerie générale — Design moderne et optimisé conversion.",
    longDescription:
      "Toile de Maître est un site vitrine moderne conçu pour une SAS spécialisée dans la maçonnerie générale et le gros œuvre. L'objectif était de transformer une expertise artisanale de plus de 35 ans en une présence numérique élégante. Le site intègre une Lightbox personnalisée pour naviguer à travers des galeries de photos HD des chantiers, un bouton d'appel flottant toujours accessible sur mobile, un formulaire de devis intelligent intégré avec EmailJS, et des sections de statistiques (35 ans d'expérience, 1000+ projets) pour établir une autorité immédiate. Pensé Mobile-First avec des scores de performance exceptionnels grâce à Vite, le code est structuré de manière sémantique pour favoriser le SEO. Le contenu est géré via un fichier content.js pour permettre des mises à jour rapides sans toucher au code source.",
    images: [
      "/images/toile-de-maitre-0.png",
    ],
    tags: ["React 19", "Vite", "Tailwind CSS 4", "Framer Motion", "EmailJS", "Lucide React"],
    githubLink: "https://github.com/EliasL94/toile-de-maitre",
    demoLink: "https://toile-de-maitre.vercel.app/",
  },
  {
    id: "justpay",
    title: "JustPay",
    description:
      "Application bancaire full-stack avec authentification JWT, virements, prélèvements automatiques et dashboard financier.",
    longDescription:
      "JustPay est une application bancaire complète développée en groupe de 4. Le back-end (FastAPI + Python) gère l'authentification sécurisée via JWT et hashage des mots de passe (Passlib), la base de données SQLite via SQLModel, et une validation stricte des données avec Pydantic. Le front-end React offre une gestion d'état via Hooks, des graphiques d'évolution du solde sur 1 an, la génération de relevés PDF et un système de Toast annulable de 5 secondes pour sécuriser les virements. Fonctionnalités clés : inscription/connexion, ouverture de comptes, virements entre comptes propres ou vers des tiers, ajout de bénéficiaires, prélèvements automatiques paramétrables (montant + fréquence) et dashboard avec comparaison recettes/dépenses.",
    images: [
      "/images/justpay-0.svg",
      "placeholder",
      "placeholder",
      "placeholder",
    ],
    tags: ["React", "FastAPI", "Python", "SQLite", "SQLModel", "JWT", "Pydantic", "Passlib"],
    githubLink: "https://github.com/EliasL94/JustPayFront",
    githubLinkBack: "https://github.com/Matheo-sys/JustPay",
  },
  {
    id: "fontaines-paris",
    title: "Fontaines de Paris",
    description:
      "Carte interactive pour localiser les fontaines à boire à Paris avec géolocalisation automatique et calcul d'itinéraire.",
    longDescription:
      "Ce projet web permet aux utilisateurs de localiser toutes les fontaines à boire de Paris sur une carte interactive. Il utilise Leaflet.js pour le rendu cartographique (tuiles OpenStreetMap), la géolocalisation automatique du navigateur pour centrer la carte sur l'utilisateur, et le moteur de routage OSRM pour calculer l'itinéraire jusqu'à la fontaine la plus proche. Les données des fontaines proviennent de l'Open Data de la Ville de Paris. Une base de données MySQL avec PHP est utilisée côté serveur pour la gestion des données. Le projet est documenté avec un dossier /doc complet incluant le schéma de BDD, le workflow de développement et le guide d'installation.",
    images: [
      "/images/fontaines-de-paris-0.png",
      "placeholder",
      "placeholder",
      "placeholder",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Leaflet.js", "PHP", "MySQL", "OpenStreetMap", "OSRM"],
    githubLink: "https://github.com/EliasL94/Projet-Web",
  },
  {
    id: "image-editor",
    title: "Image Editor CLI",
    description:
      "Editeur d'image interactif en ligne de commande développé en Python permettant de manipuler et de transformer des images rapidement.",
    longDescription:
      "Image Editor CLI est une application interactive en ligne de commande développée en Python permettant de manipuler et de transformer des images. L'utilisateur peut charger une image locale et lui appliquer divers filtres : Flou Gaussien, Dilatation Topologique (via OpenCV), conversion Noir & Blanc, redimensionnement dynamique, rotation libre et annotation personnalisée (texte avec gestion de police, taille et couleur). Le projet utilise Pillow pour la manipulation d'images, OpenCV pour les transformations morphologiques complexes, et NumPy pour la gestion des matrices d'images. Ce projet met l'accent sur la programmation modulaire et la vision par ordinateur.",
    images: [
      "/images/image-editor-0.png",
      "placeholder",
      "placeholder",
      "placeholder",
    ],
    tags: ["Python", "Pillow", "OpenCV", "NumPy", "CLI"],
    githubLink: "https://github.com/MonsoonD/Image-Editor",
  },
  {
    id: "unity-platformer",
    title: "Adventure 2D & Map Editor",
    description:
      "Jeu d'aventure 2D réalisé sous Unity avec un éditeur de cartes personnalisé et des mécaniques de gameplay avancées.",
    longDescription:
      "Développé en équipe de 4, ce projet est un jeu d'aventure 2D complet réalisé avec Unity et C#. Le joueur doit explorer un monde complexe, résoudre des énigmes, et affronter divers ennemis jusqu'à un Boss final. J'ai co-développé des scripts C# complexes pour gérer les mécaniques spéciales de parcours (double saut, dash), le système de quêtes et l'intelligence artificielle des ennemis. Le projet inclut également un éditeur de cartes (Map Editor) sur mesure pour faciliter la création de niveaux et la gestion des assets.",
    images: [
      "/images/unity-0.png",
      "placeholder",
      "placeholder",
      "placeholder",
    ],
    tags: ["Unity", "C#", "Game Dev", "2D", "Map Editor"],
    githubLink: "https://github.com/felicienbouryesieeit/platformernew",
  },
  {
    id: "gestion-pharmacie",
    title: "Gestion Pharmaceutique Java",
    description:
      "Outil de gestion backend pour pharmacie permettant de centraliser les stocks, les commandes et les alertes critiques.",
    longDescription:
      "Ce projet consiste en la création d'un outil de gestion backend robuste pour une pharmacie, développé en Java. Il permet de centraliser les opérations critiques liées aux stocks et aux flux de commandes. Fonctionnalités clés : gestion d'inventaire complète (CRUD) avec recherche optimisée via algorithme de recherche binaire, système de validation de commandes en temps réel, alertes automatiques de stock critique (seuil < 5 unités) et historique détaillé des transactions. L'architecture repose sur les principes de la POO (classes abstraites, interfaces, collections Java) pour garantir un code modulaire, performant et facilement évolutif.",
    images: [
      "/images/pharmacie-0.png",
      "placeholder",
      "placeholder",
      "placeholder",
    ],
    tags: ["Java", "POO", "Algorithmique", "Gestion de Stock", "JDK 17"],
    githubLink: "https://github.com/V0one/PooJava/tree/dev",
  },
  {
    id: "quiz-android",
    title: "Quiz Informatique Android",
    description:
      "Application mobile native Android de quiz interactif développée en Java avec gestion dynamique des questions.",
    longDescription:
      "Dans le cadre de ma formation, j'ai conçu et développé une application mobile Android native permettant de réaliser des quiz interactifs sur la culture informatique. L'application gère des sessions de quiz dynamiques avec sélection aléatoire des questions chargées via un fichier externe (assets). Le projet met l'accent sur la gestion rigoureuse du cycle de vie des Activités (sauvegarde du score lors de la rotation d'écran) et une navigation fluide via Intents. L'interface utilise XML avec un design adaptatif (Edge-to-Edge). Ce projet m'a permis de consolider mes bases en développement Android, manipulation de Listes et architecture via Singletons.",
    images: [
      "/images/quiz-android-0.png",
      "/images/quiz-android-1.png",
      "placeholder",
      "placeholder",
    ],
    tags: ["Android", "Java", "XML", "Mobile Dev", "Android Studio"],
    githubLink: "https://github.com/Joss-inf/2025-Android-B2-Paris-Groupe-G3/tree/dev",
  },
  {
    id: "reseau-social",
    title: "Analyse de Réseau Social",
    description:
      "Moteur d'analyse de graphes en Python — détection de communautés, top influenceurs et simulation de propagation.",
    longDescription:
      "Projet réalisé en binôme (Elias & Mathéo) modélisant un réseau social sous forme de graphe orienté. Le projet implémente de zéro (sans librairie externe) les algorithmes fondamentaux de la théorie des graphes : parcours en largeur (BFS) et en profondeur (DFS), détection de communautés, classement des top influenceurs, calcul du temps et du chemin de propagation d'une information dans le réseau. Une fonction de génération de graphes aléatoires respectant des contraintes (nombre de nœuds, densité) permet de tester les algorithmes à grande échelle. Le code est structuré en modules séparés : outils.py (fonctions principales), graphe.py (matrice d'adjacence et liste), main.py (génération aléatoire), script.py (CLI) et tests.py (couverture complète des fonctions).",
    images: [
      "/images/reseau-social-0.png",
      "/images/reseau-social-1.png",
      "placeholder",
      "placeholder",
    ],
    tags: ["Python", "Théorie des graphes", "BFS", "DFS", "Algorithmes", "CLI"],
    githubLink: "https://github.com/Matheo-sys/Projet-Reseau-social-",
  },
];
