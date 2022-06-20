// // 1

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;



// // 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   callback(pizzaName);
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

// // 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}`);
//   });

// 4


// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onOrderError) {
      

//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
      
   
//         }
//         return onOrderError(pizzaName);
//     }
// }

// // Callback for onSuccess
// function makePizza(pizzaName) {
  
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//     return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));



// 5

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function eachOrder(orderedItems) {
//     totalPrice += orderedItems;
//   })

//   // Change code above this line
//   return totalPrice;
// }

// 6

