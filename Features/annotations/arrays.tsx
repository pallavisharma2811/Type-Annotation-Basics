/*
typed arrays - make use of one specific type of values inside of an array
to represent a collection of different records 
*/

//type annotation
const carMakers: string[] = [];
const carsByMakers: string[][] = [];

//type inference
const cMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const cByMakers = [['f150'], ['corolla'], ['camaro']];

//Help with inference when extracting values
const fordCar = cByMakers[0][0];
const car = cByMakers.pop();

/*
Prevent incompatible values
carsByMakers.push([2,3,4])
*/
carsByMakers.push(['f150'], ['corolla'], ['camaro']);

//Help with 'map()'
carMakers.map((item): string => {
  //suggested methods on item:string
  return item.toUpperCase();
});

//Hetrogenous Array- Flexible types

const importantDates: (string | Date)[] = [];
importantDates.push('06-8-2021', new Date(), '27-07-2021');
