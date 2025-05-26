require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const jokeRoutes = require('./routes/joke.routes');
app.use('/api/v1/blagues', jokeRoutes);

const sequelize = require('./config/database');
const Joke = require('./models/joke.model');

async function seedJokes() {
  await Joke.destroy({ where: {}, truncate: true });

  await Joke.bulkCreate([
    { question: 'Que dit un oignon quand il se cogne ?', answer: 'Aïe' },
    { question: "Quel est l'animal le plus heureux ?", answer: 'Le hibou, parce que sa femme est chouette.' },
    { question: "Pourquoi le football c'est rigolo ?", answer: 'Parce que Thierry en rit' },
    { question: 'Quel est le sport le plus fruité ?', answer: 'La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.' },
    { question: 'Que se fait un Schtroumpf quand il tombe ?', answer: 'Un Bleu' },
    { question: 'Quel est le comble pour un marin ?', answer: 'Avoir le nez qui coule' },
    { question: 'Qu\'est-ce que les enfants usent le plus à l\'école ?', answer: 'Le professeur' },
    { question: 'Quel est le sport le plus silencieux ?', answer: 'Le para-chuuuut' },
    { question: 'Quel est le comble pour un joueur de bowling ?', answer: 'C’est de perdre la boule' }
  ]);

  console.log('✅ Blagues ajoutées automatiquement à la BDD');
}

sequelize.sync({ force: true })
  .then(() => {
    console.log('✅ Base de données réinitialisée et synchronisée');
    seedJokes();
  })
  .catch((err) => {
    console.error('❌ Erreur de synchronisation de la base de données', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
