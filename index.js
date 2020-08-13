const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');


const produtosRouter = require('./routes/produtos/routes');
const clientesRouter = require('./routes/clientes/routes');
const pedidosRouter = require('./routes/pedidos/routes');

let options = {
  swaggerDefinition: {
      info: {
          description: 'This is a sample server',
          title: 'Swagger',
          version: '1.0.0',
      },
      host: 'api-loja-exemplo.herokuapp.com',
      basePath: '/',
      produces: [
          "application/json",
          "application/xml"
      ],
      schemes: ['http', 'https']
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/**/*.js'] //Path to the API handle folder
};



/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const app = express();
const expressSwagger = require('express-swagger-generator')(app);
app.use(cors(
  /*{
    origin: "http://financeiro-desafio-final.herokuapp.com"
  }*/
));
app.use(express.json());

/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join(__dirname, 'client/build')));

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
  response.send({
    message:
      'API está funcionando',
  });
});

/**
 * Rotas principais do app
 */
app.use('/api/produto', produtosRouter);
app.use('/api/cliente', clientesRouter);
app.use('/api/pedido', pedidosRouter);


/**
 * Conexão ao Banco de Dados
 */
const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Conectado ao MongoDB');

  expressSwagger(options);
  /**
   * Definição de porta e
   * inicialização do app
   */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});
