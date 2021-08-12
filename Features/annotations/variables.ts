let student: string = 'Pallavi';
let grade: number = 3;

//built in objects

const now: Date = new Date();
//Array
let truthy: boolean[] = [false, true, true];
let friends: string[] = ['Priyanka', 'Puran', 'Anita', 'Jyoti', 'Kanistha'];
let age: number[] = [25, 26, 47];

//classes

class Car {

}

const car: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 45
};

//anotating a variable declaration

const logName: (name: string)=> void = (name)=>{
  console.log(`Hello ${name}`)
}

logName('Varun');

//annotations and inference around variables

//1. Function that returns the any type
const jsonString = '{"x": 10, "y": 20}'
const coordinates:{x: number; y: number}  = JSON.parse(jsonString);
console.log(coordinates.x);

//typescript does not know what we will get out of JSON.parse()
JSON.parse('4');
JSON.parse('false');
JSON.parse('{"name": "cheli"}');

//2. When we declare a variable and initialise it in different lines
let words = ['shailvi', 'garden', 'flowers', 'swing'];

let foundFlowers: boolean;
for(let word in words){
  if(words[word]=== 'flowers'){
    foundFlowers = true;
  }
}

//3. when we have a variable who is type cannot be inferred correctly.
//assign number(type) if it is >0 else boolean(type)

let numbers = [-1, -3, -5, 10];
let isGreater: boolean| number;

for (var i = 0; i<numbers.length; i++){
  if(numbers[i]>0){
    isGreater = numbers[i];
  }
}
