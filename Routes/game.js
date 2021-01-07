const express = require('express');

const gameController = require('../controller/game');

const router = express.Router();

// Game Routes
router.get('/start-game', gameController.getGameForm);
router.post('/submit-game', gameController.postGameDetails);

// Game History Route
router.get('/game-history', gameController.getGameHistory);

module.exports = router;
