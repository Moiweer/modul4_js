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

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
  
//     filteredNumbers.forEach(function filteredNumbers(numbers){
//      return filteredNumbers;
//      })
//     const callback1 = function () {
//         numbers > value;
//       return filteredNumbers.push(filteredNumbers);
            
//     }
//     // const r1 = filterArray([1,2, 3, 4, 5], callback1)
  

// }

// function filterArray(numbers, value) {
 
//   let filteredNumbers = [];
  

//   numbers.forEach(function (number){
// if (number > value){
//   filteredNumbers.push(number);
// }
//   });

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// 7


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//    firstArray.forEach(function (element) {
 
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//   return commonElements;

// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


// 8

// const calculateTotalPrice = (quantity, pricePerItem) =>
//    quantity * pricePerItem;

// 9

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;


// 10


// // Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach((item)=> {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// 11


// const filterArray = (numbers, value) =>{
//   const filteredNumbers = [];

//   numbers.forEach((number) =>{
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

  
//   return filteredNumbers;
// }


// 12

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });


//   return commonElements;
// }


// 13

// function changeEven(numbers, value) {
//   const newArray = [];
//  numbers.forEach ((number) => {
//     if (number % 2 === 0) {
//       return newArray.push(number + value);
//        }
//        newArray.push(number);
//     });
  
//  return newArray;
// };

// 14

