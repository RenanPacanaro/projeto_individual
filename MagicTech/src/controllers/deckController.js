var deckModel = require("../models/deckModel");
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var formato = req.body.formatoServer;
    var cores = req.body.coresServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("O nome do deck está undefined!");
    } else if (formato == undefined) {
        res.status(400).send("O formato do deck está undefined!");
    } else if (cores == undefined) {
        res.status(400).send("As cores do deck estão undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, formato, cores)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
