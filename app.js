////////////ARRAYS AND LOOP////////////

//Question No.01
// var multiDimArray = [];

//Question No.02
// var arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];

//Question No.03
//   for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }

//Question No.04
// var number = +prompt("Enter a number for the multiplication table:");
// var length = +prompt("Enter the length of the multiplication table:");

//   for (let i = 1; i <= length; i++) {
//     console.log(number + "x" + i + "=" + number * i);
//   }

//Question No.05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//Question No.06
// var countingSeries () {
//   for (var i = 1; i <= 15; i++) {
//     console.log(i);
//   }
// }

// var reverseCountingSeries() {
//   for (var i = 10; i >= 1; i--) {
//     console.log(i);
//   }
// }

// var evenSeries() {
//   for (var i = 0; i <= 20; i += 2) {
//     console.log(i);
//   }
// }

// var oddSeries() {
//   for (var i = 1; i <= 19; i += 2) {
//     console.log(i);
//   }
// }

// var customSeries() {
//   for (var i = 2; i <= 20; i += 2) {
//     console.log(i + "k");
//   }
// }

// console.log("Counting:");
// countingSeries();

// console.log("Reverse counting:");
// reverseCountingSeries();

// console.log("Even:");
// evenSeries();

// console.log("Odd:");
// oddSeries();

// console.log("Series:");
// customSeries();

//Question No.07
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(item) {
//   return A.includes(item);
// }

// function searchAndDisplayResult() {
//   const userInput = prompt("Enter an item to search for:");

//     const lowerCaseUserInput = userInput.toLowerCase();

//   // Search for the item and inform the user
//   if (searchItem(lowerCaseUserInput)) {
//     alert(`${userInput} is found in the list.`);
//   } else {
//     alert(`${userInput} is not found in the list.`);
//   }

//   searchAndDisplayResult();
// }
// searchAndDisplayResult();

//Question No.08
// const A = [24, 53, 78, 91, 12];
// let largestNumber = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }
// console.log("The largest number in the array is:", largestNumber);

//Question No.09
// const A = [24, 53, 78, 91, 12];
// const smallestNumber = Math.min(...A);
// console.log("The smallest number in the array is:", smallestNumber);

//Question No.10
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }


////////////STRING METHODS////////////

//Question No.01
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");

// const fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome!");

//Question No.02
// const userInput = prompt("Enter your favorite mobile phone model:");

// const inputLength = userInput.length;

// document.write("My favourite phone is: " + userInput);
// document.write("and length of string: " + inputLength);

//Question No.03
// const word = "Pakistani";
// let indexOfN = -1;

// for (let i = 0; i < word.length; i++) {
//   if (word[i] === "n") {
//     indexOfN = i;
//     break; 
//   }
// }
// document.write(`The index of "n" in the word "${word}" is: ${indexOfN}`);

//Question No.04
// const word = "Hello World";
// let lastIndex = -1;
// for (let i = word.length - 1; i >= 0; i--) {
//   if (word[i] === "l") {
//     lastIndex = i;
//     break; 
//   }
// }
// document.write(`The last index of "l" in the word "${word}" is: ${lastIndex}`);

//Question No.05
// const word = "Pakistani";
// let characterAtIndex3 = null;
// for (let i = 0; i < word.length; i++) {
//   if (i === 3) {
//     characterAtIndex3 = word[i];
//     break; 
//   }
// }
// document.write(`The character at the 3rd index in the word "${word}" is: ${characterAtIndex3}`);

//Question No.06
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "! Welcome!");

//Question No.07
// let word = "Hyderabad";
// let result = "";
// for (let i = 0; i < word.length; i++) {
//     if (word.substring(i, i + 5) === "Hyder") {
//         result += "Islam";
//     i += 4; 
//   } else {
//         result += word[i];
//   }
// }
// document.write(`The modified word is: ${result}`);

//Question No.08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var modifiedMessage = message.replace(/and/g, "&");
// document.write("Original message: " + message + "<br>");
// document.write("Modified message: " + modifiedMessage);

//Question No.09
// var str = "472";
// var num = parseInt(str);
// document.write("Original string: " + str + "<br>");
// document.write("Converted number: " + num + "<br>");
// document.write("Type of original string: " + typeof str + "<br>");
// document.write("Type of converted number: " + typeof num);

//Question No.10
// const userInput = prompt("Enter some text:");
// const capitalizedText = userInput.toUpperCase();
// alert(`Input in capital letters: ${capitalizedText}`);

//Question No.11
// const userInput = prompt("Enter some text:");
// function toTitleCase(input) {
//   const words = input.toLowerCase().split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//   }
//   return words.join(" ");
// }
// const titleCaseText = toTitleCase(userInput);
// alert(`Input in title case: ${titleCaseText}`);

//Question No.12
// var num = 35.36;
// var numAsString = num.toString();
// var result = numAsString.replace(".", "");

// document.write("Original number: " + num + "<br>");
// document.write("Number as string: " + numAsString + "<br>");
// document.write("Number : " + result);

//Question No.13
// const username = prompt("Enter a username:");
// function isValidUsername(username) {
//   for (let i = 0; i < username.length; i++) {
//     const charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//       return false;
//     }
//   }
//   return true;
// }
// if (isValidUsername(username)) {
//   alert("Username is valid: " + username);
// } else {
//   alert("Please enter a valid username without special symbols.");
// }

//Question No.14
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Enter an item to search:");
// function searchItem(array, item) {
//   item = item.toLowerCase(); 
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase() === item) {
//       return true; 
//     }
//   }
//   return false; 
// }
// if (searchItem(A, userInput)) {
//   alert(`"${userInput}" is found in the list.`);
// } else {
//   alert(`"${userInput}" is not found in the list.`);
// }

//Question No.16
// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write("Original string: " + university + "<br>");
// document.write("Array elements: " + universityArray.join(", "));


//Question No.17
// const userInput = prompt("Enter some text:");

// if (userInput !== null && userInput !== "") {
//    const lastCharacter = userInput[userInput.length - 1];
//   alert(`The last character is: ${lastCharacter}`);
// } else {
//    alert("You didn't enter any text.");
// }


//Question No.18
// var inputString = "The quick brown fox jumps over the lazy dog";
// var lowercaseString = inputString.toLowerCase();
// var wordToSearch = "the";
// var count = 0;
// var position = lowercaseString.indexOf(wordToSearch);

// while (position !== -1) {
//     count++;
//   position = lowercaseString.indexOf(wordToSearch, position + 1);
// }

// alert(`The word "${wordToSearch}" appears ${count} times in the string.`);