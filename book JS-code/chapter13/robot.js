function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectNL"
Robot.prototype.speak = function(){
    console.log("WARNING!")
}

Robot.prototype.makeCoffee =  function(){
    console.log("making cofee")
}
Robot.prototype.blinkLights = function(){
    console.log("blink lights")
}

var robby = new Robot("Robby", 1956, "Mr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.makeCoffee = function(){
    console.log(robby.name + " ran to Starbucks")
}
robby.blinkLights = function(){
    console.log(robby.name + " had on and off switch")
}

rosie.cleanHouse = function(){
    console.log(rosie.name + " cleaned house Perfectly")
}

console.log( robby.name + " was made by "+ robby.maker + " in "+ robby.year + " and is owned by "+ robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by" + rosie.maker + " in "+ rosie.year+ " and is owned by "+ rosie.owner);
rosie.cleanHouse();
