# Carambar & co - API Backend

## Description
API REST versionnée pour gérer les blagues Carambar.  
Construit avec Node.js, Express, Sequelize et SQLite.

## Endpoints principaux
- `POST /api/v1/blagues` : Ajouter une blague  
- `GET /api/v1/blagues` : Récupérer toutes les blagues  
- `GET /api/v1/blagues/:id` : Récupérer une blague par ID  
- `GET /api/v1/blagues/random` : Récupérer une blague aléatoire  

## Documentation Swagger
Accessible ici : [Swagger UI](https://carambar-api-ypeq.onrender.com/api-docs)

## Déploiement
Backend déployé sur Render :  
https://carambar-api-ypeq.onrender.com

## Installation en local
```bash
git clone https://github.com/TonPseudo/carambar-back.git
cd carambar-back
npm install
npm start
