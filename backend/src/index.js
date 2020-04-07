const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// Production
// app.use(cors({
//     origin:'https://my-App.com'
// }));

app.use(express.json());
app.use(routes);


/**
@tipos
Tipos de parâmtros:
Query Params:
    Parâmtros nomeados enviados na rota após "?" (filtros, paginação)
    ex: localhost:3333/users?name=Lucas
        localhost:3333/users?page=2&nome=Lucas&idade=26

Route Params:
    Parâmtros utilizados para identificar recursos
    localhost:3333/users/:id

Request Body:
    Acessa parâmtros pela requisição
    ex: localhost:3333/users?name=Lucas
        res: { name: 'Lucas' }
**/



app.listen(3333);

