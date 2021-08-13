class AVehicle {
  private drive(): void {
    console.log('chuga chuga');
  }
  honk(): void {
    this.drive();
    console.log('beep');
  }
}
const vehicle = new AVehicle();
//vehicle.drive(); not allowed
vehicle.honk(); //accessing private method drive() indirectly

class Car extends AVehicle {
    //overriding method on child class
    honk():void{
    //this.drive(); not allowed
    console.log('beep')
  }
}
const car = new Car();

car.honk();

/*
private modifier/keyword does not add any type of security around th application,
or protects from some malicious user.

The only reason to mark private is to restrict the different methods that other developers
can call.
*/ 
