Application web complète de gestion d'événements universitaires
développée avec Node.js/Express en backend et une interface
moderne avec Tailwind CSS en frontend.
Fonctionnalités Principales
Backend (API REST)
CRUD complet pour les événements universitaires

Upload de fichiers (affiches images + fiches PDF/TXT)

Persistance des données dans un fichier JSON

Middleware CORS pour les requêtes cross-origin

Gestion des fichiers avec Multer

Interface moderne avec Tailwind CSS

Carte interactive Leaflet avec géolocalisation

Chatbot intelligent pour interroger les événements

Formulaire complet avec prévisualisation d'images

Liste dynamique des événements avec suppression

Géocodage via l'API Nominatim (OpenStreetMap)

Backend
Node.js v18+

Express.js - Framework web

Multer - Gestion des uploads de fichiers

CORS - Middleware pour les requêtes cross-origin

File System (fs) - Gestion des fichiers JSON

Frontend
HTML5 - Structure de la page

Tailwind CSS - Framework CSS utilitaire

JavaScript ES6+ - Logique client-side

Leaflet.js - Cartes interactives

Fetch API - Communication avec le backend

📁 Structure du Projet
text
tp2-events/
├── server.js                 # Serveur Express principal
├── package.json             # Dépendances Node.js
├── events.json             # Base de données JSON (auto-généré)
├── uploads/                # Dossier des fichiers uploadés
│   ├── images/            # Affiches des événements
│   └── documents/         # Fiches descriptives
└── public/                # Frontend statique
    ├── index.html         # Interface utilisateur complète
    └── (app.js intégré)   # Logique JavaScript dans le HTML
