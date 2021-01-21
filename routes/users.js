// Aqui estamos inicializando o NeDB (banco de dados leve do JS)
let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    let route = app.route('/users');

    route.get((req, res) => {
        
        // Em 'sort' a gente coloca o parâmetro:1 para deixar crescente, ou parâmetro:-1 para decrescente.
        db.find({}).sort({name:1}).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                // res.status(200).json({users:users});
                res.status(200).json({users}); // No ES6 a gente pode colocar assim e ele já entende a mesma
                                               // coisa que a linha de cima.
            }
        });

    });

    route.post((req, res) => {
        // Salvando no NeDB
        // db.insert(objeto-json-que-quero-salvar, (func-se-erro-ao-salvar, objeto-que-foi-salvo));
        // - Um exemplo de erro é se o _id passado for exatamente de algum que já esteja salvo do db.
        // - O objeto que vai ser salvo não tem id. Depois que ele é salvo o NeDB gera um id para ele,
        //   ficando na constante _id.
        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json({user});
            }
        });
    });
};