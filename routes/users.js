// Aqui estamos inicializando o NeDB (banco de dados leve do JS)
let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    app.get("/users", (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            users: [
                {
                    name: 'Arthur Jorge',
                    email: 'arthur@email.com',
                    id: 1
                },
                {
                    name: 'Laura Maria',
                    email: 'laura@email.com',
                    id: 2
                }
            ]
        });
    });

    app.post("/users", (req, res) => {
        // Salvando no NeDB
        // db.insert(objeto-json-que-quero-salvar, (func-se-erro-ao-salvar, objeto-que-foi-salvo));
        // - Um exemplo de erro é se o _id passado for exatamente de algum que já esteja salvo do db.
        // - O objeto que vai ser salvo não tem id. Depois que ele é salvo o NeDB gera um id para ele,
        //   ficando na constante _id.
        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(`error: ${err}`);
                // Status 400 significa que houve algum erro por parte do usuário.
                res.status(400).json(
                    {
                        error: err
                    }
                );
            } else {
                res.status(200).json(user);
            }
        });
    });
};