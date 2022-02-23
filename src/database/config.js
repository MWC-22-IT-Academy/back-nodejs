const { connect } = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await connect(pocess.env.MONGODB_CNN || 'mongodb://localhost:27017/developers');
    } catch (error) {
        console.log(error);
        throw new Error('Error when starting the database');
    };
};

module.exports = { dbConnection };