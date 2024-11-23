const express = require("express");
const conn = require("./db/conn");
const routes = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error while attempting to run the server: ${error}`);
        return;
    }

    console.log(`Server is running on port ${PORT}!`);
});

conn();