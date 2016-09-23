'use strict';

function Animal(voice){
    this.voice = voice || 'GRUNT';
}

Animal.prototype.speak = function(){
    console.log(this.voice);
};


function Cat(name,color){
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

//use our Animal function as the prototype for our cat

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy', 'White');

console.log(fluffy.speak());