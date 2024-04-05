import mongoose from "mongoose";


// Student Schema
const StudentSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
    },
    phone : {
        type : String,
        required : true,
        trim : true,
    },

    age : {
        type : Number,
        required : true,
    
    },
    location : {
        type : String,
        required : true,
        trim : true,
    },
    gender : {
        type : String,
        enum : ["Male","Female", "Custom"]
    },
    status : {
        type : Boolean,
        default : true
    },
    trash : {
        type : Boolean,
        default : false
    },

}, {timestamps : true});


// export student schema
export default mongoose.model("Student", StudentSchema);