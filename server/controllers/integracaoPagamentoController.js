const integracaoPagamentoService = require("../services/integracaoPagamentoService")

function integracaoPagamento(req, res) {
    integracaoPagamentoService.pagamento(req, res)
}


module.exports = integracaoPagamento