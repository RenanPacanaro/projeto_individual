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
                resultadoChamar_baralho
            });
}
    )
}
function cadastrar_resultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var vitorias = req.body.vitoriasServer;
    var derrotas = req.body.derrotasServer;
    var empates = req.body.empatesServer;
    var idBaralho = req.body.idBaralhoServer;
    console.log(req.body);
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("O nome do deck está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        deckModel.cadastrar_resultado( vitorias, derrotas, empates, idBaralho)
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
function chamar_resultado(req,res){
    var id_Usuario = req.body.id_UsuarioServer
    deckModel.chamar_resultado(id_Usuario)
    .then(
        function (resultadoChamar_resultado) {
        
            res.json({
                resultadoChamar_resultado
            });
}
    )
}
module.exports = {
    cadastrar,
    chamar_baralho,
    cadastrar_resultado,
    chamar_resultado
    
    // cadastrar2
}