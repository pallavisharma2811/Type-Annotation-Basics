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
vehicle.honk();

class Car extends AVehicle {
  //overriding method on child class
   honk():void{
    //this.drive(); not allowed
    console.log('beep')
  }
}
const car = new Car();

car.honk();
