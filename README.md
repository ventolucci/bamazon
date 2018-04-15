# bamazon


This is an Amazon-like storefront using MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

The app prompt users with two messages.

The first is to ask  the ID of the product they would like to buy.

The second message  ask how many units of the product they would like to buy.

Once the customer has placed the order, bamazon  check if the store has enough of the product to meet the customer's request.

If not, the store should log a phrase like Insufficient quantity!, and then prevent the order from going through.

However, if your store does have enough of the product, you should fulfill the customer's order.

This means updating the SQL database to reflect the remaining quantity.

Once the update goes through, show the customer the total cost of their purchase.
