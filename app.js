// 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product,
//  an amount needed and whether it is bought or not. Write a few functions for working with this array. 

// Display the entire list, so that the not yet purchased items go before the bought ones. 
// Adding a purchase to the list. Note that if a product already exists, the amount needs to
//  be increased in the existing purchase, not in a new one. 
// Purchasing a product. The function accepts the name of a product and marks it as bought.



// let groceriesList = [
//     {
//       name: "mango",
//       amount: 3,
//       bought: false,
//       price: 1.50 
//     },


//     {
//       name: "milk",
//       amount: 1,
//       bought: true, 
//       price: 2.20 
//     },


//     {
//       name: "flour", 
//       amount: 2, 
//       bought: false, 
//       price: 15.00 
//     },


//     {
//       name: "eggs", 
//       amount: 12, 
//       bought: true, 
//       price: 3.40 
//     }

// ];

// console.log("Not bought:");
// for (let key in groceriesList) {
//     if (groceriesList[key].bought === false) {
//         console.log(groceriesList[key]);
//     }
// }

// console.log("Bought:");
// for (let key in groceriesList) {
//     if (groceriesList[key].bought === true) {
//         console.log(groceriesList[key]);
//     }
// }



// function addPurchase(list, name, amount, price) {
//     let found = false;

//     for (let i = 0; i < list.length; i++) {
//         if (list[i].name === name) {
//             list[i].amount += amount; 
//             found = true;
//             break; 
//         }
//     }

//     if (!found) {
//         list.push({
//             name: name,
//             amount: amount,
//             bought: false,   
//             price: price
//         });
//     }
// }

// console.log("Before adding mango:");
// console.log(groceriesList);

// addPurchase(groceriesList, "mango", 2, 1.50);

// console.log("After adding 2 mangoes:");
// console.log(groceriesList);

// console.log("Before adding sugar:");
// console.log(groceriesList);

// addPurchase(groceriesList, "sugar", 5, 1.50);

// console.log("After adding 5 sugars:");
// console.log(groceriesList);



// function purchasingProduct(list, name) {
//   let found = false;

//   for (let i = 0; i < list.length; i++) {
//     if (list[i].name === name) {
//       list[i].bought = true; 
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     console.log(`Product "${name}" not found in the list.`);
//   }
// }

// console.log("Before purchasing mango:");
// console.log(groceriesList);

// purchasingProduct(groceriesList, "mango");

// console.log("After purchasing mango:");
// console.log(groceriesList);



// 2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product,
//  an amount bought, and price per item. Write the following functions. 

// Print the receipt out on the screen.
// Counting the sum of the purchase.
// Extracting the most expensive item on the receipt.
// Counting an average item price on the receipt.


// let shopReceipt = [
//     { 
//       name: "mango",
//       amount: 3, 
//       price: 1.5 
//     },

//     { 
//       name: "milk", 
//       amount: 1, 
//       price: 2.2 
//     },
//     { 
//       name: "flour", 
//       amount: 2, 
//       price: 15 
//     },
//     { name: "eggs", 
//       amount: 12, 
//       price: 3.4 
//     }
// ];


// function showReceipt(receipt) {
//     let completTot = 0;

//     for (let i = 0; i < receipt.length; i++) {
//         let total = receipt[i].amount * receipt[i].price;
//         completTot += total; 
//         console.log(`${receipt[i].name} - Amount: ${receipt[i].amount}, Price: ${receipt[i].price}, Total: ${total}`);

//     }

//     console.log(`Final Total:  ${completTot}`);
// }

// showReceipt(shopReceipt);


// function findSum(list){
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     sum += list[i].amount * list[i].price;
//   }
//   console.log(`The sum is: ${sum}`);
// }

// findSum(shopReceipt);


// function maximum(list) {
//     let max = list[0]; 
//     for (let i = 1; i < list.length; i++) { 
//         if (list[i].price > max.price) {
//             max = list[i]; 
//         }
//     }
//     console.log(`Most expensive item: ${max.name},  $${max.price}`);
// }

// maximum(shopReceipt);


// function findAverage(list) {
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     sum += list[i].amount * list[i].price; 
//   }

//   let average = sum / list.length;
//   console.log(`The average total per product is: ${average}`);
// }

// findAverage(shopReceipt);




// 3. Create an array of css-styles (color, font size, alignment, underline etc.)
//  Each element of the array is an object consisting of two properties: 
// style name and style value, Write a function that accepts the style array 
// and a text and puts out this text via document.write() in the <p></p> tags, 
// adding the style attribute with all the styles in the array to the opening tag.

// let cssArr = [
//   { 
//     name: "color",
//     value: "#222" 
//   },
//   {
//     name: "font-size", 
//     value: "50px" 
//   },
//   {
//     name: "text-align",
//     value: "center" 
//   },
//   { 
//     name: "text-decoration", 
//     value: "underline" 
//   }
// ];

// function writeCssText(styles, text) {
//   let styleString = "";
//   for (let i = 0; i < styles.length; i++) {
//     styleString += `${styles[i].name}: ${styles[i].value}; `;
//   }
//   document.write(`<p style="${styleString}">${text}</p>`);
// }

// writeCssText(cssArr, "Front-End Development  Kutia");




// 4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20)
//  and the faculty it is meant for. Write a few functions for working with it.

// Display all the classrooms.
// Display all the classrooms for a given faculty.
// Display only the classrooms that would fit a given group. A group object contains a name, 
// the number of students, and the faculty name.
// A function for sorting all the classrooms by number of seats.
// A function for sorting all the classrooms by name in alphabetical order.


// let academyClassroom = [
//   { 
//     name: "Klasa X-1",
//     seats: 55, 
//     faculty: "FIEK" 
//   },
//   { 
//     name: "A3", 
//     seats: 112, 
//     faculty: "MP" 
//   },
//   {
//     name: "A5", 
//     seats: 30, 
//     faculty: "FBV" 
//   },
//   {
//     name: "Amf", 
//     seats: 60, 
//     faculty: "BF" 
//   }
// ];


// Display all the classrooms.

// function Display(room){
//   for(let i = 0; i < room.length; i++){
//     console.log(`Name: ${room[i].name}, Seats: ${room[i].seats}, Faculty: ${room[i].faculty}`);
//   }
// }

// Display(academyClassroom);





// Display all the classrooms for a given faculty.

// function Class(room, faculty) {
//   for (let i = 0; i < room.length; i++) {
//     if (room[i].faculty === faculty) {
//       console.log(`Name: ${room[i].name}`);
//     }
//   }
// }

// Class(academyClassroom, "FIEK");




// A function for sorting all the classrooms by number of seats.

// function sortSeats(list) {
//   list.sort((a, b) => a.seats - b.seats);
// }

// sortSeats(academyClassroom);
// console.log("Classrooms sorted by seats:", academyClassroom);




// A function for sorting all the classrooms by name in alphabetical order.

// function sortByAlphabet(list) {
//   list.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
// }

// sortByAlphabet(academyClassroom);
// console.log("Sorted by alphabet order" ,academyClassroom);


