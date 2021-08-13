//field - long annotation
class AVehicle {
  color: string;

  //constructor doesn't have a return type annotation
  constructor(color: string) {
    this.color = color;
  }
  private drive(): void {
    console.log('chuga chuga');
  }
  honk(): void {
    this.drive();
    console.log('beep');
  }
}
const vehicle = new AVehicle('red');
console.log(vehicle.color);

//field - short annotation
class BVehicle {
  constructor(public color: string) {}
  private drive(): void {
    console.log('chuga chuga');
  }
  honk(): void {
    this.drive();
    console.log('beep');
  }
}
const bvehicle = new BVehicle('blue');
console.log(bvehicle.color);