import mongoose from "mongoose";
const {Schema} = mongoose

// result model
const resultPretestModel = new Schema({
    usernamePretest : {type : String},
    resultPretest : {type : Array, default : []},
    attemptsPretest : {type : Number, default : 0},
    pointsPretest : {type : Number, default : 0},
    achivedPretest : {type : String, default : ''},
    refleksiBenarPretest : {type : String, default : ''},
    refleksiSalahPretest : {type : String, default : ''},
    createdAt : {type : Date, default : Date.now},
})

export default mongoose.model('resultpretest', resultPretestModel)