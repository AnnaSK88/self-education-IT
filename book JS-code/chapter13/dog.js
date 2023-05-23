function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    
}
Dog.prototype.species ="Canine";

Dog.prototype.bark = function(){
    if ( this.weight > 25){
        console.log( this.name + " says WOOF!");
    } else{
        console.log(this.name + " says YIP!");
    }
};

Dog.prototype.run = function(){
    console.log("Run!");
};

Dog.prototype.wag = function(){
    console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy =  new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chichuahua", 10);
spot.bark = function(){
    console.log(this.name + " says WOOOOOF!");
}

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();