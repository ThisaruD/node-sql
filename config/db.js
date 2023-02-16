import mysql from 'mysql'

//connect with db
export const connectDB = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'todo_db',
            multipleStatements: true
        });


connectDB.connect((err)=>{
    if(err)
        console.log('DB connection failed ' +err);
    else
        console.log('DB connect successfully');
});


// export {
//     db
// }
export default { connectDB};