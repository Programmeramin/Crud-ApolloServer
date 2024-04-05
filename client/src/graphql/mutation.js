import { gql } from "@apollo/client";



export const CREATE_STUDENT = gql`
    
mutation StudentMutaion($name: String!, $phone: String!, $email: String!, $location: String!, $age: Int!){
createStudent(name: $name, phone: $phone, email: $email, location: $location, age: $age) {
id
name
phone
email
location
age
}
}

`


export const DELETE_STUDENT = gql`
mutation studentDelete($deleteStudentId: ID!){
  deleteStudent(id: $deleteStudentId) {
    id,
    name,
    email,
    phone
  }
}

`