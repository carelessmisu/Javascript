var Animal = function() {};
var Hamster = function() {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
// console.log(a.costructer === Animal);
// console.log(h.costructer === Animal);
// console.log(h.costructer === Hamster);
console.log(h instanceof Animal);
console.log(h instanceof Hamster);
console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));

var obj = { hoge : function(){}, foo : function(){}};

console.log('hoge' in obj);
console.log('piyo' in obj);