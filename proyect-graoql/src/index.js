const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/proyectSchemas');
const resolvers = require('./resolvers/proyectResolver');

const startServer = async () => {

    await mongoose.connect('mongodb+srv://admin:admin@tasks.ybekh.mongodb.net/?retryWrites=true&w=majority&appName=TASKS');

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.listen().then(({ url }) => {
        console.log(`Servidor corriendo en el puerto ${url}`);
    });

};

startServer();