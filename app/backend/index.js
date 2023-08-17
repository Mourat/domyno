import express from "express"
import dotenv from "dotenv"
import mysql from 'mysql2'

dotenv.config();


const app = express()

const db = mysql.createConnection({
    host: process.env.MYSQLDB,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    port: process.env.MYSQLDB_LOCAL_PORT
});

app.get("/", (req, res) => {
    res.json("Hello this is backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(3000, () => {
    console.log("Connected to backend")
})