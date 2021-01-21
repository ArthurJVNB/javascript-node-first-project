module.exports = { // Criamos um objeto.
    // Abaixo criamos uma função chamada "send", que recebe esses 4 parâmetros.
    send: (err, req, res, code = 400) => {
        // Status 400 significa que houve algum erro por parte do usuário.

        console.log(`error: ${err}`);
        res.status(code).json({
            error: err
        });
    }
};