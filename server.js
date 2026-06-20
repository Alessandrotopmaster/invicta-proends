const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/cadastro', (req, res) => {
    res.json({ success: true, message: 'Cadastro realizado!' });
});

app.post('/api/vendas', (req, res) => {
    res.json({ success: true, message: 'Venda processada!' });
});

app.get('/api/metricas', (req, res) => {
    res.json({ vendas: 150, receita: 12500, afiliados: 230 });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('🚀 Invicta Próends rodando na porta ' + PORT);
});
