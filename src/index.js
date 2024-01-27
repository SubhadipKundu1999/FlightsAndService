const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {

    // creat the express server
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }))

    //listen on port ::::
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })

}


setupAndStartServer();