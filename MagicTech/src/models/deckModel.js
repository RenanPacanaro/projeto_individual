var database = require("../database/config")
// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, formato, idUsuario) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO baralho (nome, formato, fk_Usuario) VALUES ('${nome}', '${formato}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function cadastrar2(cores, fk_baralho) {
    var instrucaoSql2 = `
        INSERT INTO cor (cores, fk_baralho) VALUES ( '${cores}', '${fk_baralho}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}
function chamar_baralho(idUsuario){
    console.log("Executando a instrução SQL: \n" + instrucaoSql3);
    var instrucaoSql3 =  `
    SELECT idBaralho, baralho.nome, baralho.formato, cor.cores FROM baralho join usuario on baralho.fk_usuario = usuario.idUsuario join cor on cor.fk_baralho = baralho.idBaralho WHERE idUsuario = ${idUsuario};
`;
    return database.executar(instrucaoSql3);
}
module.exports = {
    cadastrar,
    cadastrar2,
    chamar_baralho
};