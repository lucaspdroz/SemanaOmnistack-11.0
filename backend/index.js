const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento:'Semana Omnistack',
        aluno:'Lucas'
    });
});

app.listen(3333);
