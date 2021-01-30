// Business logic for Order ---------
function Order() {
  this.pizzas = {};
  this.currentOrderId = 0;
}

// Assigns unique ID each time a pizza object is added to Order
Order.prototype.assignOrderId = function() {
  this.currentOrderId += 1;
  return this.currentOrderId;
}

// Add instances of Pizza to be stored in Order
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

// User Interface Logic ---------
$(document).ready(function() {
  $('form#order-form').submit(function(event) {
    event.preventDefault();
    const orderName = $('input#userName').val();
    const inputtedPizzaSize = $('input:radio[name=pizzaSize]:checked').val();

  })
})
