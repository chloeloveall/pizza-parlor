// Business logic for Order ---------
function Order() {
  this.pizzas = {};
  this.currentOrderId = 0;
};

// Assigns unique ID each time a pizza object is added to Order
Order.prototype.assignOrderId = function() {
  this.currentOrderId += 1;
  return this.currentOrderId;
};

// Add instances of Pizza to be stored in Order
Order.prototype.addPizzaOrder = function(pizza) {
  pizza.orderId = this.assignOrderId();
  this.pizzas[pizza.orderId] = pizza;
};

// Business logic for Pizza ---------
function Pizza(orderName, pizzaSize, toppings, totalPizzaCost) {
  this.orderName = orderName;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.totalPizzaCost = totalPizzaCost;
};

Pizza.prototype.addSize = function() {
  if (this.pizzaSize === 'large') {
    return this.totalPizzaCost = 20;
  } else if (this.pizzaSize === 'medium') {
    return this.totalPizzaCost = 15;
  } else {
    return this.totalPizzaCost = 10;
  }
};

Pizza.prototype.addToppings = function() { 
  let toppingsPrice = 0;
  this.toppings.forEach(function() {
    toppingsPrice += 3;
  })
  return toppingsPrice;
};

Pizza.prototype.calculateTotalCost = function() {
  return this.totalPizzaCost = this.addSize() + this.addToppings();
};

// User Interface Logic ---------
$(document).ready(function() {
  $('form#order-form').submit(function(event) {
    event.preventDefault();
    const orderName = $('input#orderName').val();
    const pizzaSize = $('input:radio[name=pizzaSize]:checked').val(); 
    const toppings = [];
    $('input:checkbox[name=topping]:checked').each(function() {
      toppings.push($(this).val());
    })
    const pizza = new Pizza(orderName, pizzaSize, toppings);
    const order = new Order();
    order.addPizzaOrder(pizza);

    console.log(pizza);
    console.log(pizza.calculateTotalCost());
  });
});
