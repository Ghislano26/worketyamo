# Tasks API

Petite API REST avec Express (sans base de données, les tâches sont stockées en mémoire).

## Routes disponibles

- `GET /` — message de bienvenue
- `GET /health` — vérification de l'état du serveur
- `GET /tasks` — liste des tâches
- `GET /tasks/:id` — une tâche précise
- `POST /tasks` — créer une tâche (`{ "title": "..." }`)
- `PUT /tasks/:id` — modifier une tâche
- `DELETE /tasks/:id` — supprimer une tâche

## Objectif de l'exercice

1. Installer les dépendances (`npm install`) et lancer le serveur en local (`npm run dev`).
2. Déployer ce projet sur [Render](https://render.com) (Web Service, build `npm install`, start `npm start`).
3. Le déploiement va échouer. À vous d'analyser les logs de build/déploiement sur Render, de trouver la ou les erreurs, de les corriger, et de refaire un déploiement jusqu'à obtenir une API fonctionnelle en ligne.
4. Vérifiez votre déploiement en visitant `/health` sur l'URL fournie par Render.
