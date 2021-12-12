// const mysql = require('mysql');
// const dotenv = require('dotenv');
// // let instance = null;
// dotenv.config();

// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     port: process.env.DB_PORT
// });

// connection.connect((err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     console.log('db '+ connection.state)
// });

// class DbService {
//     static getDbServiceInstance() {
//         return instance ? instance : new DbService();
//     }

//     // Queries
//      async  getAllData() {

//         try{
//             const response = await new Promise((resolve,reject) => {

//                 const query = "SELECT * FROM names";
//                 connection.query(query,(err,results) =>{

//                     if(err) reject(new Error(err.message));
//                     resolve(results);
//                 });
//             })
//             console.log("---Response dbService")
//             console.log(response);
//             return response;
//         }
//         catch (error)
//         {
//             console.log(error);
//         }
    
//     }

//     async insertNewName(name) {
//         const dateAdded = new Date();
//             const query = "INSERT INTO names (name, date_added) VALUES (?,?);";

//             connection.query(query,[name, dateAdded], (err, result) => {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   console.log("Values Inserted");
//                 }
//             })
//             return {
                       
//                         name : name,
//                         dateAdded : dateAdded
//                     };
      
// }}
        // try {
        //     const dateAdded = new Date();
        //     const insertId = await new Promise((resolve, reject) => {
        //         const query = "INSERT INTO names (name, date_added) VALUES (?,?);";
    
        //         connection.query(query, [name, dateAdded] , (err, result) => {
        //             if (err) reject(new Error(err.message));
        //             resolve(result.insertId);
        //         })
        //     });
        //     return {
        //         id : insertId,
        //         name : name,
        //         dateAdded : dateAdded
        //     };
        //     // console.log("Inside Query--------")
        //     // console.log(insertId);
        // } catch (error) {
        //     console.log(error);
        // }
    






  


// module.exports = DbService;