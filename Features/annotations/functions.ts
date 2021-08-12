//annotating a variable
const greet: (a: string) => string = (a) => {
  return `Say ${a}`;
};
greet('Hello Guddan');

//Annonating Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const sub = (a: number, b: number) => {
  // return void
  a - b;
};

function multiply(a: number, b: number): number {
  return a / b;
}

//anonymous
const divide = function (a: number, b: number): number {
  return a % b;
};

//return void
const logger = (message: string): void => {
  console.log(message);
  //return undefined;
  //return null;
};

//return never
//never going to actually reach the end of this function

const throwError = (message: string): never => {
  throw new Error(message);
};
const throwErrorMessage = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
};

const todaysWeather:{date: Date; weather: string} = {
  date : new Date(),
  weather: 'sunny'
}

//object/todaysWeather as an argument
/*
ES2015 syntax listing properties directly in {}
const logWeather = ({date, weather})=>{
  console.log(date)
  console.log(weather)
}
*/
const getWetherOfDay= (forecast: {date: Date, weather:string}):void=>{
  console.log(forecast.weather);
  console.log(forecast.weather);
}
getWetherOfDay(todaysWeather);

// don't stick annotation with destructuring, seperate by :
const logWeather = ({date, weather}: {date: Date, weather:string})=>{
  console.log(date)
  console.log(weather)
}


/*
1. Type inference only works around the return value from a function
2. TypeScript analyse the body of the fun {} as soon as we declare the return type
3. Type system is just concerned with type and not the logic
4. use return annotation to avoid making missing return
*/
