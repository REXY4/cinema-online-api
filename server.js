const express = require("express");

const app = express();
//config
require("dotenv").config();
app.use(express.json());

const port = prosses.env.PORT || 5000;
//router
const cors = require('cors');
const router = require("./src/routers");

app.use(cors());
app.use("/api/v1/", router);
app.use('/uploads', express.static('uploads'));

app.get("/", function(req, res){
	res.send("cinema online api")
})

app.listen(port, ()=>console.log(`Running on port : ${port}`));

