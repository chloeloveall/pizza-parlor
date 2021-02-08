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

// Assigns a default name if none is entered
Pizza.prototype.defaultNameOption = function() {
  if (this.orderName === '' || this.orderName === ' ' || this.orderName === null) {
    return 'User';
  } else {
    return this.orderName;
  }
}

// Assigns a base price based on the user's size input
Pizza.prototype.addSize = function() {
  if (this.pizzaSize === 'large') {
    return this.totalPizzaCost = 20;
  } else if (this.pizzaSize === 'medium') {
    return this.totalPizzaCost = 15;
  } else {
    return this.totalPizzaCost = 10;
  }
};
// Loops through toppings array and adds 3 for each that is selected
Pizza.prototype.addToppings = function() { 
  let toppingsPrice = 0;
  this.toppings.forEach(function() {
    toppingsPrice += 3;
  })
  return toppingsPrice;
};
// Adds the values of addSize and addToppings and returns a custom thank you message
Pizza.prototype.calculateTotalCost = function() {
  this.totalPizzaCost = this.addSize() + this.addToppings();
  return `Thank you for your order ${this.defaultNameOption()}! Your total is $${this.totalPizzaCost}.`
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
    order.addPizzaOrder(pizza);q
    $('#show-total').text(pizza.calculateTotalCost()).show();
    $('form#order-form').hide();
  });
});
