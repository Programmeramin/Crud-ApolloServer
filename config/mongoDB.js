import mongoose from "mongoose";


// create mongodDB Connection
const mongodDBConnection = async () =>{

    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connection Succesful`.bgGreen.white);
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }

}


// export connection
export default mongodDBConnection;