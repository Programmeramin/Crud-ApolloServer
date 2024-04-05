import { gql } from "@apollo/client";



export const GET_ALL_STUDENT = gql`
    
query StudentQuery {
getAllStudent {
id,
name,
email, 
phone,
location,
age,

}
}

`