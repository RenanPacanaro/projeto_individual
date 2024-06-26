var express = require("express");
var router = express.Router();

var deckController = require("../controllers/deckController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    deckController.cadastrar(req, res);
})
router.post("/cadastrar2", function (req, res) {
    deckController.cadastrar2(req, res);
})
router.post("/chamar_baralho", function (req, res) {
    deckController.chamar_baralho(req, res);
});
router.post("/cadastrar_resultado", function (req, res) {
    deckController.cadastrar_resultado(req, res);
});
router.post("/chamar_resultado", function (req, res) {
    deckController.chamar_resultado(req, res);
});

module.exports = router;