import { Router } from "express";
const router = Router();

// Import Controller
import * as controller from '../controllers/controller.js'

// Questions Routes API
router.route('/questions')
        .get(controller.getQuestionsPosttest) // GET Request
        .post(controller.insertQuestionsPosttest) // POST Request
        .delete(controller.dropQuestionsPosttest) // DELETE Request

router.route('/questionsPretest')
        .get(controller.getQuestionsPretest) // GET Request
        .post(controller.insertQuestionsPretest) // POST Request
        .delete(controller.dropQuestionsPretest) // DELETE Request

// Result Routes API
router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/resultPretest')
        .get(controller.getResultPretest)
        .post(controller.storeResultPretest)
        .delete(controller.dropResultPretest)

// Register Routes API
router.route('/signup')
        .get(controller.getSignUp)
        .post(controller.signUp)

// Login Routes API
router.route('/signin')
        .post(controller.signIn)
        
export default router;