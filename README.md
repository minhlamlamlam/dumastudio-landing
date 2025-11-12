# Duma Studio - Landing Page

Landing page ultra-minimaliste pour Duma Studio, développée avec Astro.

## 🚀 Fonctionnalités

- Design minimaliste et moderne
- Dark mode avec toggle fluide
- Animations au scroll
- Optimisé pour les performances (Lighthouse 95+)
- SEO optimisé
- Responsive mobile-first

## 🛠️ Technologies

- [Astro](https://astro.build) - Framework web moderne
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement sur Vercel

### Via l'interface Vercel

1. Créer un compte sur [Vercel](https://vercel.com)
2. Cliquer sur "Add New Project"
3. Importer votre repository GitHub
4. Vercel détectera automatiquement Astro
5. Cliquer sur "Deploy"

### Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 🔗 Configuration du domaine Namecheap

1. Aller sur Namecheap > Domain List > Manage
2. Aller dans "Advanced DNS"
3. Ajouter ces enregistrements :

```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic

Type: A
Host: @
Value: 76.76.21.21
TTL: Automatic
```

4. Dans Vercel, aller dans Settings > Domains
5. Ajouter votre domaine
6. Suivre les instructions de vérification

## 📝 Mentions légales

- TVA BE1028.727.857
- Contact : support@dumastudio.app

## 📄 License

© 2025 Duma Studio. Tous droits réservés.
