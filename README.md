# DU MA App Studio — Landing

Site vitrine de **DU MA App Studio** (« Apps with attitude »), bilingue FR/EN.

- **Production :** https://www.dumastudio.app (aussi `dumastudio.app`, `duma.wtf`) — version anglaise sur `/en`
- **Stack :** Astro 5 (sortie statique) + Tailwind 3, hébergé sur Vercel

## État des lieux (octobre 2026)

**Design** — refonte d'après la maquette Claude Design « DU MA Refonte », direction **A · Kinetic**, palette **Nuit cobalt** (fond `#11121C`, accent ambre, cartes corail / lavande / menthe). Polices : Archivo (variante condensée pour les titres) et JetBrains Mono.

**Structure de la page** (`src/components/Site.astro`) :

1. Nav fixe (logo DU MA, lien Projets, bascule FR/EN)
2. Hero « APPS WITH / ATTITUDE. » qui glisse au scroll
3. Bandeau défilant incliné (slogans)
4. Intro qui s'allume mot par mot au scroll
5. Projets en cartes plein écran empilées
6. « MADE TO CREATE. » qui grossit à l'arrivée
7. Footer : logo DU MA, mentions légales, contact

Les animations sont en JS natif (boucle `requestAnimationFrame` sur les éléments `data-fx`) et désactivées si `prefers-reduced-motion`.

**Projets présentés :**

| # | Projet | Type | URL |
|---|--------|------|-----|
| 01 | Resto1Click | Web app | https://resto1click.com |
| 02 | Ça Goutte! | App mobile | https://www.cagoutte.app |
| 03 | Convoi | Jeu mobile | https://www.convoi.games |

**Textes :** un objet `t` par langue dans `src/pages/index.astro` (FR) et `src/pages/en/index.astro` (EN). Les slogans de marque restent en anglais dans les deux langues.

**SEO / GEO** (`src/layouts/Layout.astro`) : URL canonique, hreflang fr/en/x-default, Open Graph / Twitter, JSON-LD (Organization, WebSite, CollectionPage avec chaque app). Sitemap généré par `@astrojs/sitemap`, référencé dans `public/robots.txt`. Domaine de référence : `site` dans `astro.config.mjs`.

**Points ouverts :**

- Dépendances : à jour en versions mineures. Majeures disponibles non appliquées (Astro 7, Tailwind 4, TypeScript 7). `npm audit` signale des failles dans des outils de build/dev (astro, esbuild, sharp…) — sans impact sur le site publié, qui est du HTML statique ; elles se corrigent avec la montée en Astro 7.
- URL canonique de la page anglaise en `/en/` alors que hreflang utilise `/en`.
- `public/panther.png` n'est plus utilisé.

## Développement

```bash
npm install
npm run dev       # serveur local
npm run build     # astro check + build dans dist/
npm run preview   # prévisualiser le build
```

## Déploiement

L'intégration Git de Vercel déploie automatiquement en production à chaque push sur `main` : un `git push` suffit (inutile de lancer aussi `vercel deploy --prod`, sinon le déploiement est fait deux fois).

## Mentions légales

- TVA BE1028.727.857
- Contact : support@dumastudio.app

© 2024–2026 DU MA App Studio. Tous droits réservés.
