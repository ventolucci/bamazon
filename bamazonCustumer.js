var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'bamazon'
});

connection.connect(function(err){
  if(err) throw err;
  displayItems();
})

var displayItems = function(){
 connection.query("SELECT * FROM products", function(err, res){
   if(err) throw err;
   for (var i=0; i < res.length; i++){
     console.log(res[i].item_id+'  '+res[i].product_name+'  '+res[i].department_name+'  '+res[i].price+'  '+res[i].stock_quantity);
     console.log('================================');
   }
   buyItem();
 })
}
var buyItem = function() {
	console.log('\n  ');
	inquirer.prompt([{
		name: "id",
		type: "input",
		message: " Enter the Item ID of the product you want to purchase",

	}, {
		name: "quantity",
		type: "input",
		message: " Enter the quantity you want to purchase",

	}]).then(function(answer) {
		// Query the database for info about the item including the quantity currently in stock. 
		connection.query('SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?', {item_id: answer.id}, function(err,res) {
			
		console.log('\n  You would like to buy ' + answer.quantity + ' ' + res[0].product_name + ' ' + res[0].department_name + ' at $' + res[0].price + ' each'
			);
			if (res[0].stock_quantity >= answer.quantity) {
				//If enough inventory to complete order, process order by updating database inventory and notifying customer that order is complete. 
				var itemQuantity = res[0].stock_quantity - answer.quantity;
				connection.query("UPDATE products SET ? WHERE ?", [
				{
					stock_quantity: itemQuantity
				}, {
					item_id: answer.id
				}], function(err,res) {
					});	
				var cost = res[0].price * answer.quantity;
				console.log('\n  Order fulfilled! Your cost is $' + cost.toFixed(2) + '\n');
				// Order completed
			buyItem();
					
			} else {
				//If not enought inventory notify customer and prompt customer for desire to shop more
				console.log('\n  Sorry, Insufficient quantity to fulfill your order!\n');
				// Order not completed
			buyItem();
      }
  
		})
    });
}

