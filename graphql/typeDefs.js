export const typeDefs = `#graphql

type Student {
    id : ID!
    name : String!
    phone : String!
    email : String!
    location : String!
    age : Int!
    status : Boolean
    trash : Boolean
    createdAt : String
    updatedAt : String
}
 
   type Query {
      getAllStudent : [Student]
      getSingleStudent (id : ID!) : Student
   }  

   type Mutation {

    createStudent (name:String!,phone: String!,email:String!,location : String!,age:Int!
    ) : Student

    deleteStudent (id : ID!) : Student

    updateStudent (id : ID!, name:String!,phone: String!,email:String!,location : String!,age:Int!) : Student

   }
   
`;

// query means database er data anbo like get request
// mutation means post put patch delete 