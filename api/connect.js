import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "social"
})

db.connect(function(err) {
    if (err) console.log(err);
  else 
    console.log("Connected!");
  });