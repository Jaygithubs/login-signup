const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req,res) =>{
    res.send("Hello jay");
})

app.listen(process.env.PORT, () => {
    console.log("Server run on port"+process.env.PORT);
})