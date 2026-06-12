# 212 Secure Services

Site web professionnel de services de **courrier sécurisé** et **serrurier d'urgence** à Londres. Développé avec **React 19** et **Vite**.

## Pile technologique (Tech Stack)

- **Bibliothèque UI** — React 19.2.6
- **Build Tool** — Vite (via `@vitejs/plugin-react`)
- **Style** — CSS natif avec variables CSS personnalisées (thème sombre)
- **Icônes** — SVG inline personnalisés
- **Polices** — Instrument Serif, Geist, Geist Mono (via Google Fonts)

## Fonctionnalités

- Page d'accueil entièrement responsive avec console de dispatch animée en temps réel
- Section Hero avec indicateurs de statut en direct (véhicules actifs, opérations en cours)
- 2 cartes de services détaillées : **Secure Courier** et **Emergency Locksmith**
- Section tarification (PricingSection)
- Section FAQ accordéon
- Section contact
- Section paiement
- Section confidentialité (PrivacySection)
- **Portail client** avec suivi de commandes en temps réel, historique, factures et gestion d'équipe
- **Portail administrateur** (Dispatch) avec gestion des requêtes entrantes et suivi des chauffeurs
- **Page de connexion administrateur** avec saisie de code PIN
- **Modale de demande de devis** (QuoteModal)
- **Bouton WhatsApp** flottant
- **Bannière de cookies** (CookieBanner)
- Navigation sticky avec effet de verre (glassmorphism) au défilement
- Menu mobile responsive
- Animations CSS (pulse, transitions, hover effects)
- Horloge en temps réel dans la console de dispatch
- Indicateurs de statut colorés (live, urgent, warn, default)
- Design système cohérent avec tokens de couleurs CSS

<img width="873" height="876" alt="Image" src="https://github.com/user-attachments/assets/501dcc1d-b598-4d75-aba7-71919a09cb5c" />

## Démarrage

### 1. Installer les dépendances

```bash
cd client
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez ensuite :

```
http://localhost:3000
```

## Compilation et exécution en production

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Structure du projet

```
client/
├── index.html                   — Point d'entrée HTML avec métadonnées SEO
├── vite.config.js               — Configuration Vite
├── eslint.config.js             — Configuration ESLint
├── package.json                 — Dépendances et scripts
├── public/                      — Fichiers statiques
├── src/
│   ├── main.jsx                 — Point d'entrée React
│   ├── logo.js                  — Logo de l'entreprise
│   ├── app/
│   │   ├── layout.jsx           — Layout principal, polices et métadonnées
│   │   ├── page.jsx             — Page d'accueil
│   │   ├── GlobalLayout.jsx     — Layout global (cookies, WhatsApp)
│   │   ├── admin/
│   │   │   ├── page.jsx         — Page portail administrateur
│   │   │   └── login/
│   │   │       └── page.jsx     — Page de connexion administrateur
│   │   └── portal/
│   │       └── page.jsx         — Page portail client
│   ├── components/
│   │   ├── Layout.jsx           — Composants Nav et Footer
│   │   └── UI.jsx               — Composants UI réutilisables (Pill, Btn, QuoteModal, CookieBanner, WhatsAppBtn, etc.)
│   ├── views/
│   │   ├── Home/
│   │   │   ├── Home.jsx         — Vue page d'accueil
│   │   │   └── Sections.jsx     — Sections (DispatchConsole, PricingSection, FaqSection, ContactSection, PaymentSection, PrivacySection)
│   │   ├── Admin/
│   │   │   ├── AdminLogin.jsx   — Vue connexion administrateur
│   │   │   └── AdminPortal.jsx  — Vue portail administrateur
│   │   └── Portal/
│   │       └── CustomerPortal.jsx — Vue portail client
│   ├── styles/
│   │   └── global.css           — Styles globaux et variables CSS
│   └── assets/                  — Ressources statiques
```
