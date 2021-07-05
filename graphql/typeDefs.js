const { gql }  = require('apollo-server')

//Post type: defines GraphQL schema Post.
//query type: it lists all of the available queries that. clients can execute, along with the return type for each.
module.exports = gql` 
    type Post {
        id:ID!
        body: String!
        createAt : String!
        username: String!

    }
    type Query{
        getPosts: [Post]
    }
`