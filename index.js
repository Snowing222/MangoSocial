//apollo-server is the core library, which helps you define the shape of your data and how to fetch it.
const { ApolloServer } = require('apollo-server');
//connect mongo database
const mongoose = require('mongoose');

// typeDef to define dataset
// Resolvers tell Apollo Server how to fetch the data associated with a particular type.
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config.js')



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
})

mongoose.connect(MONGODB, { useNewUrlParser : true, useUnifiedTopology: true})
    .then(() =>{
        console.log("MongoDB Connected")
        return server.listen({ port : 5000})

    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })


