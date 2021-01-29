// Business logic for Order ---------
function Order() {
  this.pizzas = {};
  this.currentOrderId = 0;
}

Order.prototype.assignOrderId = function() {
  this.currentOrderId += 1;
  return this.currentOrderId;
}

Order.prototype.addPizzaOrder = function(pizza) {
  pizza.orderId = this.assignOrderId();
  this.pizzas[pizza.orderId] = pizza;
}

// Business logic for Pizza ---------
function Pizza(orderName, pizzaSize, toppings) {
  this.orderName = orderName;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.totalPizzaCost = 0;
}

let order = new Order();
let pizza = new Pizza('Chloe', 'small', 'yes')
order.addPizzaOrder(pizza)
// Pizza.prototype.sizeSelect = function() {
  
// }