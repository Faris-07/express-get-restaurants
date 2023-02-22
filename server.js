const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;
app.use(express.json())

//TODO: Create your GET Request Route Below: 

app.get('/restaurants', async (req, res) => {
    const allRestaurants = await Restaurant.findAll();
    res.json(allRestaurants);
});

app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant)
})


app.post('/restaurants', async (req, res) => {
    req.body = {name: "Something", location: "Somewhere", cuisine: "SomeWho"}
    const newRestaurant = req.body;
    await Restaurant.create(newRestaurant);
    const allRestaurants = await Restaurant.findAll()
    res.json(allRestaurants);
})

app.put('/restaurants/:id', async (req, res) => {
    let id = req.params.id;
    req.body = {name: "Something", location: "Somewhere", cuisine: "SomeWho"}
    const newRestaurant = req.body;
    await Restaurant.update(newRestaurant, { where: { id: id } });
    const allRestaurants = await Restaurant.findAll();
    res.json(allRestaurants);
})

app.delete('/restaurants/:id', async (req, res) => {
    let id = req.params.id;
    await Restaurant.destroy({ where: { id: id } });
    const allRestaurants = await Restaurant.findAll();
    res.json(allRestaurants);
})

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})