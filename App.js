const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();  



app.use(cors());
app.use("/api/v1", router);

app.listen(7000, ()=>{
    console.log("Application has started successfully");
})

