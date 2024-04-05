import { gql, useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { GET_ALL_STUDENT } from "../graphql/query.js";
import { CREATE_STUDENT, DELETE_STUDENT } from "../graphql/mutation.js";
 
const Student = () => {

    const [input, setInput] = useState({
        name : "",
        email : "",
        phone : "",
        location : "",
        age : "",
        
    });

    const handleInputChange = (e) =>{
        setInput((prev) =>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const {loading, error, data} = useQuery(GET_ALL_STUDENT);

    const [createStudent, {loading : loadingMu, error : errorMu , data : dataMu}] = useMutation(CREATE_STUDENT, {
        refetchQueries : ["StudentQuery"]
    });



    const handleStudentCreate = (e) =>{
        e.preventDefault();
        createStudent({
            variables : {
                ...input,
                age : Number(input.age)
            }
        });
    }


    const [deleteStudent, {loading : loadingD, error : errorD, data : dataD}] = useMutation(DELETE_STUDENT , {
        refetchQueries : ["StudentQuery"]
    });

    const handleStudentDelete = (id)=>{

   deleteStudent({
      variables : {
        deleteStudentId : id
      }
   })

    }


  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleStudentCreate}>
                    <input type="text" placeholder="Name" name="name" value={input.name} onChange={handleInputChange}/>
                    <input type="text" placeholder="Email" name="email" value={input.email} onChange={handleInputChange}/>
                    <input type="text" placeholder="Mobile" name="phone" value={input.phone} onChange={handleInputChange}/>
                    <input type="text" placeholder="Location" name="location" value={input.location} onChange={handleInputChange}/>
                    <input type="text" placeholder="age" name="age" value={input.age} onChange={handleInputChange}/>
                    <button type="submit" className="btn btn-sm btn-success">Submit</button>
                </form>
                <div className="card">
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Location</th>
                                    <th>Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {data && data.getAllStudent.map((item, index) =>{
                                  return (
                                    <tr key={index}>
                                    <td>1</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.location}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className="btn btn-sm btn-success">View</button>
                                        <button className="btn btn-sm btn-warning">Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleStudentDelete(item.id)}>Delete</button>
                                    </td>
                                   </tr>
                                  )
                                })}

                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Student
