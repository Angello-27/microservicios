const express = require('express');
const config = require('./config');
const loaders = require('./loaders');

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    app.listen(config.port, () => {
        console.log(`Server listening on port: ${config.port}`);
    });
}

startServer();
