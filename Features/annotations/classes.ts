class AVehicle {
  protected drive(): void {
    console.log('chuga chuga');
  }
  honk(): void {
    this.drive();
    console.log('beep');
  }
}
const vehicle = new AVehicle();

vehicle.honk();

class Car extends AVehicle {
  //overriding method on child class
  public honk():void{
    this.drive();
  }
}
const car = new Car();

car.honk();
