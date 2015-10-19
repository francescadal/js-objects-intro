'use strict';

//////////////////////////////////////////////////////////////

//////////////////// WELCOME TO BATTLE.JS ////////////////////

//////////////////////////////////////////////////////////////

var infantry;

/* Create an object to represent an infantry unit, and store it in 'infantry'. */
/* Your code begins here. */
infantry = {
  Health : 2,
  speed : 2,
  strength : 1,
  attack : function (defender) {
    console.log("HIT");
    defender.health -= this.strength
  }
};
/* Your code ends here. */

var artillery;

/* Create an object to represent an artillery unit, and store it in 'artillery'. */
/* Your code begins here. */
artillery = {
  Health : 2,
  Speed : 1,
  Strength : 3,
   attack : function (defender) {
    console.log("HIT");
    defender.health -= this.strength
  }
};
/* Your code ends here. */

var cavalry;

/* Create an object to represent a cavalry unit, and store it in 'cavalry'. */
/* Your code begins here. */
cavalry = {
  Health : 1,
  Speed : 3,
  Strangth : 2
   attack : function (defender) {
    console.log("HIT");
    defender.health -= this.strength
  }
}
/* Your code ends here. */

///////////////////////////BONUS////////////////////////////

/* Write a standalone function (or a method on an object - up to you) called 'battle' which takes two units as arguments. 'battle' should pit the two characters against each other until one of them dies ('health' falls to 0 or below). The character with the higher 'speed' value goes first, but each unit has only a 50% chance of successfully attacking the other. Once one of the units dies, the function should return the surviving unit.*/
/* If you attempt this, please put the name of your method as the value for 'bonus', below, instead of null.*/
/* Your code begins here. */

/* Your code ends here. */

module.exports = {
  infantry: infantry,
  artillery: artillery,
  cavalry: cavalry,
  battle: battle
};

var battle = function(english, french) {
  while(english.health > 0 && french.health > 0)
  if (english.speed > french.speed) {
    if(Math.random()< 0.5) {
      english.attack(french);
    }
    if(Math.random() < 0.5 &&french.health > 0) {
      french.attack(english)
    }
  }
}
