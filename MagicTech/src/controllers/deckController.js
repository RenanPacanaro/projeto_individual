var deckModel = require("../models/deckModel");
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var formato = req.body.formatoServer;
    var id_Usuario = req.body.id_UsuarioServer
    var cores = req.body.coresServer
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("O nome do deck está undefined!");
    } else if (formato == undefined) {
        res.status(400).send("O formato do deck está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        deckModel.cadastrar(nome, formato, id_Usuario)
            .then(
                function (resultado) {
                    for (var cont = 0; cont < cores.length; cont++) {
                        console.log("for: ", cont);
                        var coresVar = cores[cont];
                        deckModel.cadastrar2(coresVar, resultado.insertId)
                        .catch(
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
function chamar_baralho(req,res){
    var id_Usuario = req.body.id_UsuarioServer
    deckModel.chamar_baralho(id_Usuario)
    .then(
        function (resultadoChamar_baralho) {
        
            res.json({
                idBaralho: resultadoChamar_baralho.idBaralho}
);
}
    )
}
// function cadastrar2(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var cores = req.body.coresServer;
//     var cont_baralho = req.body.cont_baralhoServer;
//     // Faça as validações dos valores
//     if (cores == undefined) {
//         res.status(400).send("As cores do deck estão undefined!");
//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         deckModel.cadastrar2(cores, cont_baralho)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }
module.exports = {
    cadastrar,
    chamar_baralho
    // cadastrar2
}