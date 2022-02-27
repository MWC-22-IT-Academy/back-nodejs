export const fullDataPost = (req, res) => {
    const data = require('../database/json/data.json');
    res.json(data);
};