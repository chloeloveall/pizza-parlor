# _Pizza Parlor: Cut My Life into Pizzas_

#### _Epicodus Week 4 Project: A web application that allows a user to order a pizza and choose toppings, choose a size, and see the final cost_

#### By _**Chloe Loveall**_

## Technologies Used

* HTML
* CSS
* Bootstrap
* Git
* Github
* VS Code
* JavaScript
* jQuery

## Description

_In depth description_

## Note(s) to Epicodus Instructors

_1/29/2021: There will be some intermittent gaps in the commit history due to time to review lessons from the week._

## Setup/Installation Requirements

1. Clone the repository
    >$ git clone https://github.com/chloeloveall/pizza-parlor.git
2. Open the portfolio-website directory in a code editor (VS Code is recommended)
3. To view the site from VS Code, use the Live Server extension to open index.html in your preferred browser 

## Specifications 

| Behavior                                                               | Input      | Output          |
| ---------------------------------------------------------------------- | ---------- | --------------- |
| The user can select size of pizza and it will add to the total cost    | small      | 10              |
| The user can select a topping and it will add to the toppings cost     | cheese     | 3               |
| The user can submit to see the final cost                              | submit     | totalPizza Cost |

## Tests 

Describe: Order()
Test: 'It should construct an order instance'
Code: let newOrder = new Order();
Expect(newOrder).toEqual(Order pizzas {})

Test: 'It should store instances of Pizza in the Order object'
Expect(Order.prototype.addPizzaOrder).toEqual(pizza {})

Test: 'It should assign an orderId to each instance of Pizza that is added to Order'
Expect(Order.prototype.assignId).toEqual(this.currentOrderId +=1)

Describe: Pizza()
Test: 'It should construct instances of Pizza'
Code: let newPizza = new Pizza();
Expect(newPizza).toEqual(Pizza {newPizza})

Test: 'It should determine the starting price based on the size of the pizza'
Expect(Pizza.addSize).toEqual(basePrice)

Test: 'It should add together the cost of selected toppings'
Expect(Pizza.addToppings).toEqual(toppingsPrice)

Test: 'It should add the size cost and toppings cost'
Expect(Pizza.calculateTotalPrice).toEqual(totalPizzaCost)

## Known Bugs

* None at this time

## License

[MIT](LICENSE.md)

## Contact Information

_Chloe Loveall <chloeloveall@protonmail.com>_