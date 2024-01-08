import mongoose from "mongoose";
const {Schema} = mongoose;

const userModel = new Schema({
    nama : {type : String},
    kelas : {type : String},
    jeniskelas : {type : String},
    absen : {type : String},
    username : {type : String},
    password : {type : String} 
})

export default mongoose.model('user', userModel)