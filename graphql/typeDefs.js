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
    type User{
        id:ID!
        email: String!
        token: String!
        username: String!
        createAt: String!
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation{
        register(registerInput:RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
    }
`