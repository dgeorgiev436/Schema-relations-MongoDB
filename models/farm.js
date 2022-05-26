const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product")

const farmSchema = new Schema({
	name: {
		type: String,
		required: [true, "PLEASE PROVIDE A FARM NAME"]
	},
	city: {
		type: String
	},
	email: {
		type: String,
		required: [true, "Please provide email"]
	},
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product"
		}
	]
})
// MONGOOSE MIDDLEWARE. findByIdAndDelete triggers the findOneAndDelete middleware
farmSchema.post("findOneAndDelete", async function(farm){
	if(farm.products.length){
		const res = await Product.deleteMany({_id: {$in: farm.products}});
		console.log(res);
	}
})

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
