import express from "express";
import {addTodo, getAllTodo,getOneTodo,updateTodo,deleteTodo} from "../controllers/todoController.js";
const router = express.Router();

router.route('/add').post(addTodo);
router.route('/get-all').get(getAllTodo);
router.route('/get-by-id/:id').get(getOneTodo);
router.route('/update-by-id/:id').put(updateTodo);
router.route('/delete-by-id/:id').delete(deleteTodo);




export default router;