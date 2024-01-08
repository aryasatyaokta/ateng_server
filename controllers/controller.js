import questions, {answers} from '../database/data.js'
import questionsPretest, {answersPretest} from '../database/dataPretest.js'

import Questionsposttest from "../models/questionSchema.js"
import Questionspretest from "../models/questionPretestSchema.js"

import Results from "../models/resultSchema.js"
import ResultPretests from "../models/resultPretestSchema.js"

import userModel from "../models/userSchema.js"

// get all questions
export async function getQuestionsPosttest(req, res) {
    try {
        const q = await Questionsposttest.find()
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}

// insert all questions
export async function insertQuestionsPosttest(req, res) {
    try {
        await Questionsposttest.insertMany([
          { questions, answers },
        ]);
        res.json({ msg: "Data Saved Successfully...!" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// delete all questions
export async function dropQuestionsPosttest(req, res) {
    try {
        await Questionsposttest.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" })
    } catch (error) {
        res.json({error})
    }
}

// get all questions
export async function getQuestionsPretest(req, res) {
    try {
        const q = await Questionspretest.find()
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}

// insert all questions
export async function insertQuestionsPretest(req, res) {
    try {
        await Questionspretest.insertMany([
          { questionsPretest, answersPretest },
        ]);
        res.json({ msg: "Data Saved Successfully...!" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// delete all questions
export async function dropQuestionsPretest(req, res) {
    try {
        await Questionspretest.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" })
    } catch (error) {
        res.json({error})
    }
}

// get all result
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

// post all result
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved, refleksiSalah, refleksiBenar } = req.body;

        if (!username && !result) throw new Error("Data Not Provided...!");

        const resultDocument = new Results({ username, result, attempts, points, achieved, refleksiSalah, refleksiBenar });
        await resultDocument.save();

        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message });
    }
}

// delete all result
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({error})
    }
}

// get all result
export async function getResultPretest(req, res) {
    try {
        const r = await ResultPretests.find();
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

// post all result
export async function storeResultPretest(req, res) {
    try {
        const { usernamePretest, resultPretest, attemptsPretest, pointsPretest, achievedPretest, refleksiSalahPretest, refleksiBenarPretest } = req.body;

        if (!usernamePretest && !resultPretest) throw new Error("Data Not Provided...!");

        const resultDocument = new ResultPretests({ usernamePretest, resultPretest, attemptsPretest, pointsPretest, achievedPretest, refleksiSalahPretest, refleksiBenarPretest });
        await resultDocument.save();

        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message });
    }
}

// delete all result
export async function dropResultPretest(req, res) {
    try {
        await ResultPretests.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({error})
    }
}

// Register
export async function signUp(req, res) {
    const newUser = new userModel({
        nama: req.body.nama,
        kelas: req.body.kelas,
        jeniskelas: req.body.jeniskelas,
        absen: req.body.absen,
        username : req.body.username,
        password : req.body.password
    })

    newUser.save()
    .then(() => {
        res.send({ code: 200, message: 'Signup Success...!' })
    }).catch((err) => {
        res.send({ code: 500, message: 'Signup Err...!' })
    })
}

// get all Signup
export async function getSignUp(req, res) {
    try {
        const users = await userModel.find()

        if(!users) {
            return res.status(404).json({msg : "Data not found...!"})
        }

        res.status(200).json(users)
    } catch (error) {
        res.send({
            code : 500,
            msg : "a server error occurred"
        })
    }
}

//
export async function signIn(req, res) {

    userModel.findOne({username : req.body.username})
    .then(result => {
        if(result.password !== req.body.password) {
            res.send({
                code : 404,
                message : "Password wrong...!"
            }) 
        } else {
            res.send({
                nama : result.nama,
                jeniskelas : result.jeniskelas,
                code : 200,
                message : "User found...!",
                token : "awdwd"
            })
        }
    }).catch(err => {
        res.send({
            code : 500,
            message : "User not found...!"
        })
    })
}