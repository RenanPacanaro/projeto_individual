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
    SELECT baralho.idBaralho, baralho.nome, baralho.formato FROM baralho join usuario on baralho.fk_usuario = usuario.idUsuario WHERE idUsuario = ${idUsuario};
`;
    return database.executar(instrucaoSql3);
}

function cadastrar_resultado(vitorias, derrotas, empates, idBaralho){
    var instrucaoSql4 = `
    INSERT INTO resultado (vitorias, derrotas, empates, fk_baralho ) VALUES ('${vitorias}', '${derrotas}', '${empates}', '${idBaralho}');
`;
console.log("Executando a instrução SQL: \n" + instrucaoSql4);
return database.executar(instrucaoSql4);
}
module.exports = {
    cadastrar,
    cadastrar2,
    chamar_baralho,
    cadastrar_resultado
};