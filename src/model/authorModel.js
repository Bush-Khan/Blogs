const mongoose = require("mongoose")
<<<<<<< HEAD

const authorSchema = new mongoose.Schema( {
fName : {type : String,
required: true},
lName : { type: String,
required : true},

title :{type: String,
required: true ,
enum : ["Mr." , "Mrs.","Miss"]},

email : { type : String ,
required : true ,
unique : true },

password : { type : String,
required : true}},{ timestamps : true}
)

module.exports = mongoose.model ('ProjectAuthor', authorSchema) 


=======
const authorSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    title: { type: String, required: true, enum: ["Mr", "Mrs", "Miss"] },
    email: { type: String, required: true, unique: true, validator:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ },
    password: { type: String, required: true }
}, { timestamps: true }
)
module.exports = mongoose.model('ProjectAuthor', authorSchema)
>>>>>>> project0
