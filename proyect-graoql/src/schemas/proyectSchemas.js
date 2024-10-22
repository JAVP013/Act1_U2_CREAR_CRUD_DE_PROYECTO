const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Proyect {
        _id: ID!
        title: String!
        completed: Boolean!
    }

    type Query {
        proyects: [Proyect!]!
    }

    type Mutation {
        createProyect(title: String!): Proyect!
        updateProyect(_id: ID!, completed: Boolean!): Proyect!
        deleteProyect(_id: ID!): Proyect!
    }

`;

module.exports = typeDefs;