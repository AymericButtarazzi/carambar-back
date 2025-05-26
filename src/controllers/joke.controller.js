const Joke = require('../models/joke.model');
const Sequelize = require('sequelize');

// POST /api/v1/blagues
exports.createJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la blague' });
  }
};

// GET /api/v1/blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des blagues' });
  }
};

// GET /api/v1/blagues/:id
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) return res.status(404).json({ error: 'Blague non trouvée' });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération' });
  }
};

// GET /api/v1/blagues/random
exports.getRandomJoke = async (req, res) => {
  try {
    const joke = await Joke.findOne({
      order: Sequelize.literal('random()'),
    });
    if (!joke) {
      return res.status(404).json({ error: 'Aucune blague trouvée' });
    }
    res.json(joke);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};

// DELETE /api/v1/blagues/:id
exports.deleteJoke = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Joke.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Blague supprimée avec succès' });
    } else {
      res.status(404).json({ message: 'Blague non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};
