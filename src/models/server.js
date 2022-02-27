const express = require('express');

import singup from '../routes/signup';
import fulldata from '../routes/fullData';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.fullDataPath = '/fulldata'
        this.signupPath = '/signup'
        this.routes();
    };

    routes() {
        this.app.use(this.signupPath, singup);
        this.app.use(this.fullDataPath, fulldata);
    };

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`Listening on port ${this.port}`);
        });
    };
};

module.exports = Server;