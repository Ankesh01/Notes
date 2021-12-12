const express = require('express')

const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const mysql = require('mysql');
// const dbService = require('./dbService');
const res = require('express/lib/response');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    console.log('db '+ connection.state)
});


// create
app.post('/insert', (request, response) => {

const name = request.body.name;
const dateAdded = new Date();
connection.query("INSERT INTO names (name,date_added) VALUES (?,?)",
[name,dateAdded],(err, result) => {
    if(err) throw err;
    else{
        response.send("Values Inserted");
    }
})
   
});



// read 
app.get('/', (req, res) => {


    res.send("Hello API")
    
})
app.get('/getAll', (req, res) => {
    
    connection.query("SELECT * FROM names", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });

    
})

// Update 



// Delete
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM names WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  


app.listen(process.env.PORT,()=> console.log(`App is running on port ${process.env.PORT}`))