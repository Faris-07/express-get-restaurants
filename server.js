const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");
const restaurantsRouter = require("./routers/Restaurant");

const port = 3000;

app.use(express.json())
app.use("/restaurant", restaurantsRouter);

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})