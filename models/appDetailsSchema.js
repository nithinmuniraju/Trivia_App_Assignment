module.exports = (sequelize, Sequelize) => {
    const EmailSchema = sequelize.define("app_details", {
        app_name: {
            type: Sequelize.STRING
        },
        full_name: {
            type: Sequelize.STRING
        },
        question_one: {
            type: Sequelize.STRING
        },
        question_two: {
            type: Sequelize.ENUM,
            values: ['White', 'Yellow', 'Orange', 'Green']
        }
    });
    return EmailSchema;
};