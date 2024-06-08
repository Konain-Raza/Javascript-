// Class is essentially a keyword used when we need to declare more complex structures.

class Vehicle { // Now we define a class named Vehicle.
    constructor(wheels, engines, doors, seats) { // Here, we define a constructor. It executes automatically when we create an object, and it can accept parameters.
        this.wheels = wheels; // 'this' is a keyword used to refer to the current instance of the class. It is used to store or access values passed through the constructor or any method.
        this.engines = engines;
        this.doors = doors;
        this.seats = seats;
    }
}

const vehicle1 = new Vehicle(4, 1, 4, 4); // Here, we create an object of the Vehicle class. This means everything the class has, the object will also have access to. 'new' is used to create a new object.
console.log(vehicle1); // Here, we log the object.
