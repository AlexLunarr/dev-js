"use strict";
// Это комментарий. Дальше идет весь код JS-файла

// const car = null === undefined;
// console.log(typeof car);
// console.log(car);


// const number = "1256.589Please confirm hotel reservation";

// console.log(Number.parseInt(number));
// console.log(Number.parseFloat(number));
// console.log(Number.isNaN(number));

// const number1 = 12.37;
// const number2 = 56.74;
// const number3 = 90.12;
// const number4 = 43.21;
// const number5 = 87.65;
// const number6 = 32.10;
// const number7 = 65.43;
// const number8 = 98.76;
// const numbers = [number1, number2,number3, number4,number5, number6,number7, number8,]

// console.log(typeof(number1))
// let value;
// let value2;
// function getNumber(a, b) {
//      value = Number((a + b).toFixed(20));
//      console.log(value);
       
// };
// getNumber(number1, number2);
// function fixedNumber() {
//      // value.toFixed(2);
//      console.log(value);
//      // console.log(value2);
//      value2 = value;
// console.log(typeof(value2))
// // console.log(value2.toFixed(2))


// };


// fixedNumber();
// console.log(...numbers);
// console.log((Math.random()));

// const word1 = "Hello";
// const word2 = "World";
// const word3 = "JavaScript";
// const word4 = "Variable";
// const word5 = "OpenAI";
// const word6 = "Language";
// const word7 = "Model";
// const word8 = "Example";

// const sentence = `${word1} ${word2}!!! I like ${word3} and ${word5}. My favorit ${word6} is ${word3}`;
// console.log(sentence);

// console.log(sentence.length);
// console.log(sentence.toUpperCase());
// console.log(sentence.toLocaleLowerCase());
// console.log(sentence.indexOf('Open'));
// console.log(sentence.includes("like"));
// console.log(sentence.endsWith("q"))
// // console.log(sentence.replace("Open"))
// console.log(sentence.slice(0, sentence.length))
// console.log(sentence.slice(8, 9))

// const age = 20;
// console.log(age > 10 && age < 10);
// console.log(false || "asdasdad");
// console.log(!3);





// function squareSum(numbers){

     
//      let value = 0;
//      for (let i = 0; i < numbers.length; i++) {
//           const element = numbers[i];
//           value = Math.pow(element, 2) + value;
     
//      };

//      return value;
// }


// console.log(squareSum([1,2]));

// function findSmallestInt(args) {

//      let value = 0;
//      for (let i = 0; i < args.length; i+=1) {
//           const element = args[i];
//           if (element < value) { value = element; } else if (value===0) {value = element;};
//           console.log(value);
//      }
//      return value;
// };
  

// console.log(findSmallestInt([78,56,232,12,0]))


// var min = function(list){
    
//      const valueMin = Math.min(...list);

//     return valueMin;
// }

// var max = function(list){
//      const valueMax = Math.max(...list);
//      return valueMax;
// }

// console.log(min([42, 54, 65, 87, 0]))
// console.log(max([4,6,2,1,9,63,-134,566]))

// let counter =10;

// while ( counter < 40 ) {
//   console.log("counter: ", counter);
//   counter += 20;
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);




// const arreyValue = [42, 54, 65, 87, 0];
// const value = arreyValue.length;
// const newArrey = [];
// console.log(arreyValue.length)
// for (let i = 1; i <= value; i += 1) {
// 	newArrey.push(arreyValue[arreyValue.length - i])
// }

// console.log(newArrey)

// const numbers = [42, 54, 65, 87, 0, 25];
// const numberValue = 87;

// for (const number of numbers) {
// 	// console.log(number)
// 	if (number === numberValue) {
// 		console.log(`This number(${number}) is in arrey`);
// 		break;
// 	}

// 	console.log("This number(${numberValue}) is not in arrey")
// }


// const numbers = [42, 54, 65, 87, 0, 25];


// // console.log(numbers.join("|||"))


// console.log(numbers.includes(65))


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]
// console.log(clients.slice(-clients.length));

// let text = "JavaScript є мовою програмування мовою, яку дуже легко вивчити."
// let word = "мовою";




// let count = countOccurrences(text, word);
// console.log(count); // Виведе: 1

// function countOccurrences(text, word) {
// 	const textArrey = text.toLowerCase().match(/[^\s.,!?]+/g);
// 	// console.log(textArrey)
//   let wordDuble = 0;
//   for (let i = 0; i < textArrey.length; i++) {
//     const element = textArrey[i];
//     if (element === word) {
//       wordDuble = wordDuble + 1;
//     }
//   }
//   return wordDuble;
// }


// function extractWords(text) {
//   const wordsArray = text.match(/[^\s.,!?]+/g);
//   return wordsArray;
// }

// let text = "JavaScript є мовою програмування, яку дуже легко вивчити.";
// let words = extractWords(text);
// console.log(words);

// let cat = 50;
// let dog = 25;

// function countAnimals(animal1, animal2) {
// 	const totalAnimals = animal1 + animal2;
// 	return totalAnimals;
// };

// console.log(countAnimals(cat, dog));

// function multiply(...args) {
// 	console.log(args)
// 	return args[args.length-1]
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function getGrade (s1, s2, s3) {
	
// 	let score;
// 	let total=0;
	
// 	for (const argument of arguments) {
// 		total += argument;
// 	}

// 	score = (total / arguments.length).toFixed(2);

	
// 	let scoreLeter = "F";
// 	if (score >= 60 && score < 70) { scoreLeter = "D" }
// 	else if (score >= 70 && score < 80) { scoreLeter = "C" }
// 	else if (score >= 80 && score < 90) { scoreLeter = "B" }
// 	else if (score >= 90 && score <= 100) { scoreLeter = "A" }
	
	
// 	return scoreLeter;
// }


// console.log(getGrade(95,90,93))

// function findDifference(a, b) {
// 	let totalA = 1;
// 	let totalB = 1;
	
// 	for (const iterator of a) {
// 		totalA *= iterator;
// 	};

// 		for (const iterator of b) {
// 		totalB *= iterator;
// 	};
// let difference = totalA - totalB;
// 	if (difference < 0) {
// 	difference = -difference
// }



// 	return difference;
// }



// console.log(findDifference([1, 4, 4], [3, 2, 5]));

// function getDivisorsCnt(n){

// 	// let number=0;
// 	// for (let i = n; i > 0; i -=1) {
// 	// 	// console.log(i)
// 	// 	if (Number.isInteger(n / i)) {
// 	// 		number += 1;
// 	// 	}

		
// 	// }

// 	  let number = 0;
//   const sqrtN = Math.sqrt(n); // Корінь квадратний з n
// console.log(sqrtN)
// 	for (let i = 1; i <= sqrtN; i++) {
// 		console.log(`Hi ${i}`)
//     if (n % i === 0) {
//       // Якщо i є дільником n
//       const quotient = n / i;
//       if (quotient === i) {
//         // Якщо i - цілий дільник n (не потрібно подвоювати)
//         number += 1;
//       } else {
//         // Якщо i та quotient - цілі дільники n (потрібно подвоїти)
//         number += 2;
//       }
//     }
//   }

// 	return number;
// }



// console.log(getDivisorsCnt(5000000));
// // 4
// const haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

// function findNeedle(haystack) {
//   // your code here
	
// 	return `found the needle at position ${haystack.findIndex(a => a === "needle")}`
// }

// console.log(findNeedle(haystack_1))


// function howMuchILoveYou(nbPetals) {

// 	const phrase = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
	

// 	if (nbPetals <= phrase.length) {
// 		return phrase[nbPetals-1]
// 	}

// 	let factor = Math.floor(nbPetals / phrase.length);
// 	// console.log(factor)
// 	let newPhrase = [];
// 	for (let i = 0; i <= factor; i++) {
// 		// console.log(i)
// 		newPhrase = newPhrase.concat(phrase);
// 	}

// 	return newPhrase[nbPetals-1]
// }


// console.log(howMuchILoveYou(7))
for (let i = 0; i < 20; i++) {
	// const element = array[i];
	console.log(`
*Г${i},Вузол Г${i} ----Г${i}----Г${i}----Г${i}----Г${i}----Г${i}----Г${i}-- A,12.7,-5,["Г${i}",STANDARD,S=3.5,U=0.0,X=-3.5,Y=-1.27],-4`)
}

const heading = document.createElement("h1");
console.log(heading);

const list = document.querySelector(".usernames");

// Adds an item to the end of the list

for (let i = 1; i <= 50; i++) {
	// const element = array[i];
const lastItem = document.createElement("p");
	lastItem.textContent = `
*В${i},Вузол В${i} ----В${i}----В${i}----В${i}----В${i}----В${i}----В${i}-- A,12.7,-5,["В${i}",STANDARD,S=3.5,U=0.0,X=-3.5,Y=-1.27],-4`;
	list.append(lastItem);
}
