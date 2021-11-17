class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator){
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.numberOfOffspring > vampire.numberOfOffspring){
      return true;
    } else {
      return false;
    }
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name){
      return this;
    } else {
      return null;
    }
     for(let child of this.offspring){
       const vampireWithName = child.vampireWithName(name);
     }
   
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendents = 0;
      
    for (const child of this.offspring) {
     totalDescendents = child.totalDescendents + totalDescendents + 1;
    }

    return totalDescendents;

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}


const ghoul = new Vampire("Ghoul", 2021);
const vlad = new Vampire("vlad", 2021);
const brad = new Vampire("brad", 2021);
const clare = new Vampire("clare", 2021);
const joan = new Vampire("joan", 2021);
const chad = new Vampire("chad", 2021);
const julie = new Vampire("julie", 2021);
const buck_the_horse = new Vampire("buck_the_horse", 2021);
const nick = new Vampire("nick", 2021);
const daulton = new Vampire("daulton", 2021);

ghoul.addOffspring(vlad);
ghoul.addOffspring(brad);
ghoul.addOffspring(clare);
ghoul.addOffspring(joan);


brad.addOffspring(chad);
brad.addOffspring(julie);
clare.addOffspring(nick);
clare.addOffspring(daulton);

daulton.addOffspring(buck_the_horse);

console.log(ghoul.vampireWithName("vlad"));
console.log(ghoul.totalDescendents)

module.exports = Vampire;

