# Portfolio Ultra-Moderne - Elias Louhichi

Ce projet est un portfolio personnel ultra-moderne conçu avec **Next.js**, **Tailwind CSS** et **Framer Motion**. Il présente une interface élégante de type SPA (Single Page Application) avec un design inspiré de l'esthétique Apple/Linear.

## ✨ Fonctionnalités

- **Design Premium** : Esthétique sombre, effets de flou (backdrop-blur), et animations fluides.
- **Grille de Projets Interactive** : Présentation des projets sous forme de cartes avec animations au survol.
- **Modales de Détails** : Chaque projet dispose d'une vue détaillée avec galerie d'images, descriptions complètes et liens GitHub/Démo.
- **Optimisation des Images** : Utilisation de `next/image` et support des formats SVG/PNG avec gestion personnalisée du cadrage.
- **Responsive Design** : Entièrement adapté aux mobiles, tablettes et écrans larges.

## 🛠️ Stack Technique

- **Framework** : [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Langage** : TypeScript

## 🚀 Installation Locale

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/EliasL94/portfolio.git
   cd portfolio
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Structure du Projet

- `src/components/` : Contient les composants UI (Hero, BentoGrid, ProjectCard, ProjectModal).
- `src/data/` : Contient le fichier `projects.ts` qui centralise toutes les données des projets.
- `public/images/` : Stocke les logos et captures d'écran des projets.

## 🌐 Déploiement sur Vercel

La méthode la plus simple pour déployer ce projet est d'utiliser la [plateforme Vercel](https://vercel.com/new).

1. Connectez votre compte GitHub à Vercel.
2. Importez le dépôt `portfolio`.
3. Cliquez sur **Deploy**.

---
Développé avec ❤️ par Elias Louhichi.
