const express = require("express")
const integracaoController = require("../controllers/integracaoPagamentoController")

const router = express.Router()

router.get('/', integracaoController)

module.exports = router

