const  { ApolloServer } = require('apollo-server');

require('dotenv').config('variables.env')
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

//conectar a la BD
conectarDB();

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`);
} )