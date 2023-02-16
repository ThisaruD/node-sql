import express from 'express';
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());

app.use('/todo', todoRoutes);

app.listen(5000,function check(error){
    if(error)
        console.log(error);
    else
        console.log('Server is running on port 5000');
})
