/*
interface create a new type describing the property names and value types of an object
type annotation: object as an argument has ; as the seperator
interface name: capitalise and generic
*/

//Long type Annotations
const oldCivic = {
  broken: true,
  name: 'civic',
  year: 2000,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

//Fixing long annotations with interface
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  date: Date;
  summary(): string;
}

const newCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  date: new Date(),
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const logVehicle = (vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(newCivic.summary());
};

// argument must satisfy Vehicle type (property 'name' as well as 'type')
logVehicle(newCivic);

/*
Function in interface:
It doesn't matter if we have additional properties on moderateCivic object

typescript will check if Reported interface definition has a function called summary 
that returns a string.
Example below: 
*/
interface Reportable {
  summary(): string;
}

const moderateCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  date: new Date(),
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(moderateCivic);

/*
Code reuse with interface
two different objects can use same interface and function if the type of argument/property/return is the same
*/

const appi = {
  color: 'red',
  carbonated: true,
  sugar: 20,
  summary(): string {
    return `Appi has ${this.color} color`;
  },
};

printSummary(appi);

const pop = {
  color: 'red',
};
//printSummary(pop); not allowed property summary is missing

/*
The Goal of interface is to define a new type
Typescript iterate through all the properties of the interface and matched it with object's property name and type
*/
