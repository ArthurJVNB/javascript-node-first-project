// Carregando um módulo do Node.js
// Nesse caso o módulo HTTP
const http = require('http');

// Criamos o servidor
// .createServer(function(requisição, resposta) {}); ----> Retorna o servidor criado
let server = http.createServer((req, res) => {
    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    // res.end('OK'); // Aqui é a resposta do servidor.

    // Toda solicitação que for feita nesse servidor terá todas as informações contidas
    // na variável 'req', como no caso, a url que foi chamada no servidor e qual método
    // usado na chamada.

    // Aqui estamos tratando a requisição:
    switch(req.url) {
        case '/':
            res.statusCode = 200; // Para a gente indicar que está tudo ok com a requisição.
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Ola voce ai</h1>');
        break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users: [
                    {
                        name: 'Arthuro',
                        email: 'email@email.com',
                        id: 1
                    },
                    {
                        name: 'Laurita',
                        email: 'email.de.laura@email.com',
                        id: 2
                    }
                ]
            }));
        break;
    };
});

// .listen(porta que vai ouvir, url do servidor, função de callback que é chamada quando os servidor subir)
// No nosso PC a gente usa uma porta que não estiver sendo usada por a gente. Já quando a gente
// hospeda nosso serviço em um servidor, usamos a porta que eles derem para nós, ou alguma da
// lista das liberadas deles.
server.listen(3000, '127.0.0.1', () => {
    console.log('O servidor está rodando!');
});