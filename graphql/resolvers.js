import Student from "../models/Student.js"

export const resolvers = {
  
    Query : {
      
      getAllStudent : async () =>{
        return await Student.find()
      },

      getSingleStudent : async (_, {id}) =>{
        return await Student.findOne()
      },
 
    }, 

    Mutation : {
      createStudent : async (_, {name, email, phone, age, location}) =>{

        // check email
        const checkEmail = await Student.findOne({email});
        if(checkEmail){
           throw new Error("Email Already Exists") 
        }

         // check Phone
         const checkPhone = await Student.findOne({email});
         if(checkPhone){
            throw new Error("Phone Already Exists")
         }

        const data =  await Student.create({
            name, email, phone, age, location
          });
          return data;
      } ,
      
      deleteStudent : async (_, {id}) =>{
        const data = await Student.findByIdAndDelete(  id
        );
        return data
      },

      updateStudent : async (_, {id, name, email, phone, age, gender, location}) =>{
        const data = await Student.findByIdAndUpdate(id,{
          name, email, phone, age, gender, location
        },{new : true});
        return data
      }
      
    }

};


// resolver means controller