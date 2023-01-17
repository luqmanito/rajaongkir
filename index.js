const express = require("express");
const mainRouter = require("./src/routes/main");

const server = express()

const PORT = 8010
server.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})

server.use(mainRouter)

server.get("/", (req, res)=>{
    console.log('ce');
res.json({
    msg: "welcome"
})
})