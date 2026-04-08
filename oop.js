// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We'll build a Virtual Zoo starting from a simple object and evolving into
// a full JS OOP implementation using Encapsulation, Inheritance, and Polymorphism.

const lion = {
  name: "Simba",
  species: "Lion",
  makeSound: function () {
    console.log(`${this.name} says: ROAR!!`);
  },
};

lion.makeSound();

// The Class Template (Encapsulation)

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; // Internal state (protected by _)
  }

  makeSound() {
    console.log(`${this.name} makes a sound...`);
  }

  eat() {
    this._hunger = this._hunger - 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
}

// Object instance
const leo = new Animal("Leo", "Lion");

console.log(leo);

console.log(leo._hunger);
leo.eat();
console.log(leo._hunger);

// specialized classes (inheritance)

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species);
    this.wingspan = wingspan;
  }
  // this is an example of polymorphism; overide the parent's method
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}


// playgroud

const lion01 = new Mammal ("01-lion", "leo", "red")
const lion02 = new Mammal ("02-lion", "leo", "green")
const lion03 = new Mammal ("03-lion", "leo", "blue")
const wolf01 = new Mammal ("01-wolf", "wild-dog", "grey")
const wolf02 = new Mammal ("02-wolf", "wild-dog", "black")
 
lion01.makeSound("weeee")
lion02.groom()
lion03.groom()
wolf01.groom()
wolf02.groom()
