const mongoose = require("mongoose")
const Product = require("./models/product")
const uniqid = require('uniqid');


mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("Mongo Connection achieved");
}).catch((err) => {
	console.log("MONGO CONNECTION ERRROR: " + err);
})


const seedProducts = [
	{name: "Fairy Eggplant", price: 1.00, category: "vegetable"},
	{name: "Organic Godess Melon", price: 4.99, category: "fruit"},
	{name: "Organic Mini Seedless Watermelon", price: 3.99, category: "fruit"},
	{name: "Organic Celery", price: 1.5, category: "vegetable"},
	{name: "Chocolate Whole Milk", price: 2.69, category: "dairy"}	
]

Product.insertMany(seedProducts).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(err)
})