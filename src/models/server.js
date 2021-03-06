const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.signupPath = '/signup'
        this.routes();
    };

    routes() {
        this.app.use(this.signupPath, require('../routes/signup'));
    };

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`Listening on port ${this.port}`);
        });
    };
};

module.exports = Server;