/*
 tuple: Array like structure where each element refers to some property of a record
 problem: When we start to represent object as an array, we lose different property labels.
 difference: We can easily swap the order of elements in an array but not in tuple
 usage: when using a CSV file
 drawbacks: when we make use of an object to model a record, it's clear at one glance.
*/

//Object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//Array-swappable
const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown';

// Tuple
const mirinda: [string, boolean, number] = ['orange', true, 50];
//mirinda[0] = 20; not allowed

// Type alias- tuple
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', true, 10];

// why not used
const carSpecs = [400, 3456];
const carStats = {
  horsePower: 400, 
  weight: 3456
}
