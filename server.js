// Import our dependencies
const express = require ('express');
const app = express();
const mysql = require('mysql2')
const dotenv = require ('dotenv');

// Configure environment variables
dotenv.config();

// Create connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

// Test the connection
db.connect((err) => { 
    // Connection is not successful
    if (err) {
        return console.log("Error connecting to the database:", err)
    }
    // Connection is successful
    console.log('Successfully connected to MySQL: ', db.threadId);
})

//question 1
//retrieve all patients
app.get('',(req,res) => {
    const getPatients = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients'
    db.query(getPatients, (err, data) => {
        // if i have an error
        if(err) {
            return res.status(404).send('Failed to get patients',err)
        }
        res.status(200).send(data)
    })
})

//question 2
//retrieve all providers
app.get('',(req,res) => {
    const getProviders = 'SELECT first_name, last_name, provider_specialty FROM providers'
    db.query(getProviders, (err, data) => {
        // if i have an error
        if(err) {
            return res.status(404).send('Failed to get providers',err)
        }
        res.status(200).send(data)
    })
})

    //question 3
//filter all patients by first name
app.get('',(req,res) => {
    const getPatients = 'SELECT first_name FROM patients'
    db.query(getPatients, (err, data) => {
        // if i have an error
        if(err) {
            return res.status(404).send('Failed to get patients',err)
        }
        res.status(200).send(data)
    })
})

    //question 4
//retrieve all providers by their specialty
app.get('',(req,res) => {
    const getProviders = 'SELECT provider_specialty FROM providers'
    db.query(getProviders, (err, data) => {
        // if i have an error
        if(err) {
            return res.status(404).send('Failed to get providers specialty',err)
        }
        res.status(200).send(data)
    })
})

//start and listen to the server
app.listen (3300,() => {
    console.log(`server is running on port 3300...`)
})

