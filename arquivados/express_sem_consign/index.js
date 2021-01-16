const express = require('express');
let routesIndex = require('./routes/index'); // Por padrão ele lerá o arquivo sendo JS.
let routesUsers = require('./routes/users');

let app = express();

app.use(routesIndex);
app.use('/users', routesUsers);

app.listen(3000, 'localhost', () => {
    console.log('O servidor está rodando!');
});