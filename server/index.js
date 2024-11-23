const express = require("express");
const conn = require("./db/conn");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (error) => {
    if (error) {
        throw new Error(`Error while attempting to run the server: ${error}`);     
    }

    console.log(`Server is running on port ${PORT}!`);
});

conn();