const gameService = require('../Services/gameService');

exports.getGameForm = (req, res, next) => {
    res.render('app_details_form', {
        pageTitle: 'Trivia App',
        path: '/game/start-game',
    });
}
exports.getGameHistory = async (req, res, next) => {
    const getHistorys = await gameService.getGameHistory(req.body);
    res.render('history', {
        pageTitle: 'Trivia App',
        path: '/game/game-history',
        history: getHistorys
    });
}

exports.postGameDetails = async (req, res, next) => {
    const getCreatResponse = await gameService.createGame(req.body);
    if(getCreatResponse){
        res.redirect('/game/start-game');
    }
}