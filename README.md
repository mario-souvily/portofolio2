# Portfolio Mario Souvily-Grieco

Portfolio professionnel de Mario Souvily-Grieco, développeur web fullstack spécialisé en React, Next.js, Node.js, TypeScript et PostgreSQL.

## 🚀 Technologies utilisées

- **Framework**: Next.js 14
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Fonts**: Geist Sans, Anek Telugu
- **Icons**: Lucide React

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. **Cloner le repository**

   ```bash
   git clone https://github.com/votre-username/portofolio2.git
   cd portofolio2
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

## 🚀 Commandes disponibles

### Développement

```bash
# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Production

```bash
# Construire l'application pour la production
npm run build
# ou
yarn build

# Démarrer le serveur de production
npm run start
# ou
yarn start
```

### Qualité du code

```bash
# Lancer le linter ESLint
npm run lint
# ou
yarn lint
```

### Export statique

```bash
# Générer une version statique du site
npm run export
# ou
yarn export
```

## 📁 Structure du projet

```
portofolio2/
├── app/
│   ├── components/          # Composants React
│   │   ├── career/         # Composant parcours professionnel
│   │   ├── competance/     # Composant compétences/technologies
│   │   ├── contact/        # Composant contact
│   │   ├── projects/       # Composant projets
│   │   ├── footer.tsx      # Pied de page
│   │   ├── Header.tsx      # En-tête
│   │   ├── hero.tsx        # Section principale
│   │   ├── Section.tsx     # Wrapper de section
│   │   └── status.tsx      # Section compétences/projets/parcours
│   ├── data/               # Données statiques
│   │   ├── career.ts       # Données parcours
│   │   ├── contact.ts      # Données contact
│   │   ├── projects.ts     # Données projets
│   │   └── stacks.ts       # Données technologies
│   ├── globals.css         # Styles globaux
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── sitemap.ts          # Configuration sitemap
├── components/
│   └── ui/                 # Composants UI réutilisables
├── lib/
│   └── utils.ts            # Utilitaires
├── public/
│   └── images/             # Images et assets
└── README.md
```

## 🎨 Personnalisation

### Modifier les données

- **Projets**: Éditer `app/data/projects.ts`
- **Compétences**: Éditer `app/data/stacks.ts`
- **Parcours**: Éditer `app/data/career.ts`
- **Contact**: Éditer `app/data/contact.ts`

### Modifier les styles

- **Couleurs**: Configurer dans `tailwind.config.js`
- **Styles globaux**: Modifier `app/globals.css`

### Modifier les métadonnées

- **SEO**: Éditer `app/layout.tsx` (section metadata)
- **Sitemap**: Configurer `app/sitemap.ts`

## 🌐 Déploiement

### Vercel (recommandé)

1. Connecter le repository à Vercel
2. Le déploiement se fait automatiquement

### Netlify

1. Construire le projet: `npm run build`
2. Déployer le dossier `out/` (si export statique)

### Autres plateformes

1. Construire: `npm run build`
2. Démarrer: `npm run start`

### AWS (Amplify, S3/CloudFront, EC2/Elastic Beanstalk)

- **Amplify Hosting (SSR/SSG Next.js)**

  - Relier votre repo (GitHub/GitLab/CodeCommit)
  - Build settings recommandés (amplify.yml implicite):
    - Build command: `npm ci && npm run build`
    - Start command (prévisualisation SSR): `npm run start`
  - Définir les variables d'env (ex: `NEXT_PUBLIC_SITE_URL`)
  - Amplify gère automatiquement les routes Next 13+/app

- **S3 + CloudFront (export statique)**

  - Exporter en statique:
    ```bash
    npm run export
    ```
    Les fichiers statiques seront générés dans `out/`.
  - Uploader le contenu de `out/` dans un bucket S3 public
  - Créer une distribution CloudFront pointant sur le bucket S3
  - Configurer l’index document sur `index.html`
  - Note: uniquement adapté si toutes les pages sont statiques (pas de SSR nécessaire)

- **EC2 / Elastic Beanstalk (Node.js)**

  - Sur votre instance:

    ```bash
    # Installation
    sudo apt update && sudo apt install -y nodejs npm
    npm ci
    npm run build

    # Démarrage en service (avec PM2 recommandé)
    npm install -g pm2
    pm2 start "npm run start" --name portfolio
    pm2 save
    pm2 startup
    ```

  - Ouvrir le port 3000 dans le Security Group (ou mieux, mettre Nginx en reverse proxy sur 80/443)
  - Pour Elastic Beanstalk: plateforme Node.js; commande de build `npm ci && npm run build` puis `npm run start`

> Astuces:
>
> - Si vous utilisez un domaine personnalisé, configurez Route 53 vers CloudFront/Load Balancer/Amplify.
> - Pour HTTPS, utilisez ACM (Amazon Certificate Manager) avec CloudFront/ALB.

## 📱 Fonctionnalités

- ✅ Design responsive
- ✅ Optimisation SEO
- ✅ Images optimisées (Next.js Image)
- ✅ Sitemap automatique
- ✅ Métadonnées Open Graph
- ✅ Support PWA
- ✅ Accessibilité

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` si nécessaire:

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Configuration Tailwind

Le fichier `tailwind.config.js` contient la configuration des couleurs et des polices personnalisées.

## 📞 Contact

- **Email**: mario.souvily@gmail.com
- **LinkedIn**: [Mario Souvily-Grieco](https://www.linkedin.com/in/mario-grieco-a510263b/)
- **GitHub**: [mario-souvily](https://github.com/mario-souvily)

## 📄 Licence

Ce projet est sous licence privée. Tous droits réservés.

---

**Développé avec ❤️ par Mario Souvily-Grieco**
