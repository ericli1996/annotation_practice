// Declare class Monster.
class Monster {
  // Constructor statement, and give it some parameters.
  constructor(name, nickname, teeth, demeanor, location) {
    // Assign default parameter values.
    this.name = name;
    this.nickname = nickname;
    this.teeth = teeth;
    this.demeanor = demeanor;
    this.location = location;
    this.isScary = true;
  }
  // Call function roar, which logs a string to the console.
  roar() {
    console.log('RARRRR')
  }
  // Call function changeName, which reassigns property this.name to newName,
  // and returns a string with this.name interpolated into it.
  changeName(newName) {
    this.name = newName
    return `I go by ${this.name} now!`
  }
  // Call function visitDentist, which reassigns property this.teeth to newTeeth.
  visitDentist(newTeeth) {
    this.teeth = newTeeth
  }
  // Call function changeMood, which reassigns property this.demeanor to newMood.
  changeMood(newMood) {
    this.demeanor = newMood
    // Log to the console, a string with this.demeanor concatenated into it.
    console.log("Now all of a sudden I feel very " + this.demeanor + "!")
  }
}
