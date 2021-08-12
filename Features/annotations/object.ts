const profile = {
  name: 'Shailvi',
  my_age: 25,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

/*
const age = profile.age;
const {age}= profile;
{dstructure} : {type annotation}
*/
const { my_age }: { my_age: number } = profile; //annotating expected structure of profile
//const {coords: {lat, long}}= profile
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;

/*
name = profile.name;
myAge = profile.myAge;

const {name, myAge} = profile;
const { name, my_age }: { name: string; myAge: string } = profile;
*/

