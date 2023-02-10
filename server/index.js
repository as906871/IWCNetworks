const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql= require("mysql2");
const cors = require("cors");

const db= mysql.createPool({
    host: "localhost",
    user:"root",
    password:"Acer@18897",
    database:"iwcn"
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

date = new Date()
fullDateTime = `${date}`
console.log(fullDateTime);


app.get("/api/get",(req,res)=>{
    const sqlGet= "SELECT * FROM todo";
    db.query(sqlGet,(error,result)=>{
        res.send(result)
    })
})

app.post("/api/post",(req,res)=>{
    const {notes} = req.body;
    const sqlInsert= "INSERT INTO todo (notes) VALUES (?)";
    db.query(sqlInsert,[notes], (error,result)=>{
        if(error){
            console.log(error);
        }
    })
});

app.delete("/api/remove/:id",(req,res)=>{
    const {id} = req.params;
    const sqlRemove= "DELETE FROM todo WHERE id= ?";
    db.query(sqlRemove, id , (error,result)=>{
        if(error){
            console.log(error);
        }
    })
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})