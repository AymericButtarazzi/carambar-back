const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/joke.controller');

/**
 * @swagger
 * tags:
 *   name: Blagues
 *   description: API de gestion des blagues
 */

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       404:
 *         description: Aucune blague trouvée
 */
router.get('/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 */
router.get('/', jokeController.getAllJokes);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', jokeController.getJokeById);

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Crée une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       500:
 *         description: Erreur lors de la création
 */
router.post('/', jokeController.createJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   delete:
 *     summary: Supprime une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague à supprimer
 *     responses:
 *       200:
 *         description: Blague supprimée avec succès
 *       404:
 *         description: Blague non trouvée
 */
router.delete('/:id', jokeController.deleteJoke);

module.exports = router;
