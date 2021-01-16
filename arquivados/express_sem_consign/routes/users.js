const express = require('express');
const { route } = require('.');
let routes = express.Router();

routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [
            {
                name: 'Arthur',
                email: 'arthur@email.com',
                id: 1
            },
            {
                name: 'Laura',
                email: 'laura@email.com',
                id: 2
            }
        ]
    })
});

routes.get('/admin', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    })
});

module.exports = routes;