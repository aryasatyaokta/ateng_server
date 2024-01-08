import mongoose from "mongoose";
const {Schema} = mongoose

// question model
const questionPretestModel = new Schema({
    questionsPretest : {type : Array, default : []},
    answersPretest : {type : Array, default : []},
    createdAt : {type : Date, default: Date.now},
})

export default mongoose.model('QuestionPretest', questionPretestModel)