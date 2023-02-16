import asyncHandler from "express-async-handler";
import {connectDB} from "../config/db.js";

//store todos to db
const addTodo = asyncHandler(async (req,res)=>{

    let details = {
        title:req.body.title,
        body:req.body.body,
        status:req.body.status,
        date:Date,
    };

    let sql = "INSERT INTO todo SET ?"

    connectDB.query(sql,details,(error)=>{
        if(error) {
            res.send({
                status:false,
                message:"TODO not created"
            });
        }else {
            res.send({
                status:true,
                message:"TODO created successfully"
            });
            console.log("todo created")
        }
    });
});


const getAllTodo = asyncHandler ((req,res)=>{

    let allTodos = "SELECT * FROM TODO";

    connectDB.query(allTodos,function(error,result){
        if(error) {
            console.log(error)
            res.send({
                status:false,
                message:"Error while get all todos"
            });
        }else {
            console.log(result)
            res.send({
                status:true,
                data:result
            });
        }
    });
});



// //get one todos
const getOneTodo = asyncHandler ((req,res)=>{

    let oneTodo = "SELECT * FROM TODO WHERE id="+req.params.id;

    connectDB.query(oneTodo,function(error,result){
        if(error) {
            console.log(error)
            res.send({
                status:false,
                message:"Error while get todo by id"
            });
        }else {
            console.log(result)
            res.send({
                status:true,
                data: result
            });
        }
    });
});




// //update todos
const updateTodo = asyncHandler ((req,res)=>{

    let updateTodo = "UPDATE TODO SET TITLE='"+req.body.title+"',BODY='"+req.body.body+"',STATUS='"+req.body.status+"'WHERE id="+req.params.id;
    let updatedTodo =  "SELECT * FROM TODO WHERE id="+req.params.id;

   connectDB.query(updateTodo,function(error){
        if(error) {
            res.send({
                status:false,
                message:"Error while update todo by id"
            });
        }else {

connectDB.query(updatedTodo,function (error,result){
    if(error){
        res.send({
            status:false,
            message:"Error while updated todo"
        });
    }else {
        res.send({
            status:true,
            data:result
        });
    }
});
        }
   });
});




// //delete todos
const deleteTodo = asyncHandler ((req,res)=>{

    let deleteTodo = "DELETE FROM TODO WHERE ID="+req.params.id+"";
    let allTodos = "SELECT * FROM TODO";


    connectDB.query(deleteTodo,function (error,result){
        if(error){
            res.send({
                status:false,
                message:"Error while delete todo"
            });
        }else {
            connectDB.query(allTodos,function (error,result){
                if(error){
                    res.send({
                        status:false,
                        message:"Error while get all todo"
                    });
                }else {
                    res.send({
                        status:false,
                        data:result
                    });
                }
            })
        }
    })
 });

export {
    addTodo,getAllTodo,getOneTodo,updateTodo,deleteTodo
}