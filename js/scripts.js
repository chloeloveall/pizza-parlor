// Business logic for Order ---------
function Order() {
  this.pizzas = {};
}

Order.prototype.addPizzaOrder = function(pizza) {
  this.pizzas[pizza.orderName] = pizza;
}

// Business logic for Pizza ---------
function Pizza(orderName, pizzaSize, toppings) {
  this.orderName = orderName;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.totalPizzaCost = 0;
}

// Pizza.prototype.sizeSelect = function() {
  
// }