const express = require('express');

let app = express();

// Agora apenas dizemos qual é o tipo de chamada, a rota e depois o que fazer com isso.
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to my first Express application</h1>');
});

app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // Agora também temos um método que já responde com json, bastando escrever:
    res.json({
        users: [
            {
                name: 'Arthuzito',
                email: 'arthuzito@gmail.com',
                id: 1
            },
            {
                name: 'Laurinha',
                email: 'laurinha@gmail.com',
                id: 2
            }
        ]
    });
});

app.listen(3000, 'localhost', () => {
    console.log('O servidor está rodando!');
});