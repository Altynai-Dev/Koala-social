import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aslan-2021",
    database: "social"
})

db.connect(function(err) {
    if (err) console.log(err);
  else 
    console.log("Connected!");
  });