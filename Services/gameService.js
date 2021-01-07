const db = require("../models");
const gameModel = db.game;

/**
 * @param req 
 * @return gameRecord
 */
exports.createGame = async (req) => {
    let gameRecord = null;
    try{
        const { fname, cricket } = req;
        console.log('req.color',req.color);
        let flagColor = null
        if(req.color){
            flagColor = req.color.join(',');
        }
        gameRecord = await gameModel.create({
            "app_name" : "Trivia App",
            "full_name"	: fname,
            "question_one" : cricket,
            "question_two" : flagColor
        })
    } catch(e){
        console.log('CreateGameServiceException', e);
    } finally {
        return gameRecord;
    }
}

/**
 * @param 
 * @return gameHistory
 */
exports.getGameHistory = async () => {
    let gameHistory = null;
    try{
        const getGameHistoryDetails = await gameModel.findAndCountAll()
        const getRawHistory = getGameHistoryDetails.rows

        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        gameHistory = getRawHistory.map(el => {
            const time = new Date(el.createdAt);
            const getTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            const getMonth = monthNames[time.getMonth()];
            const getDate = time.getDate();
            const fullTime = getDate+' '+ getMonth + ' ' +getTime;

            el.dataValues.createdAt = fullTime;
            return el;
        })
    } catch(e){
        console.log('GetGameHistoryServiceException', e);
    } finally {
        return gameHistory;
    }
}