//INHERITANCE — REUSABILITY
//Meaning
//Inheritance allows one class to receive behavior from another class.

class Cat {
  constructor(name) {
    this.name = name;
  }

  Sleeping(){
    console.log(`My Cat named ${this.name} is sleeping.`)
  }
}

class Sounds extends Cat {
  constructor(name, sounds){
    super(name);
    this.sounds = sounds;
  }

  action(){
    console.log(`My cat is ${this.sounds}`);
  }
}

const myCat = new Sounds('Rich', 'Purrying');

myCat.Sleeping();
myCat.action();