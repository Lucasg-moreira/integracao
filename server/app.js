const express = require('express') 
const app = express();

const routes = require("./routes/integracaoPagamento")
const token = '6550DEEABA1546DBAF5DD1343C6347B1'



app.use('/integracao', routes)


app.get('/', (req, res) => {
    res.json({'rodando': true})
})

app.listen(3000, () => {
    console.log('Runing...');
})