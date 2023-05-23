function Car(params){
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers= params.passengers;
    this.convertible= params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function(){
        this.started =  true;
    };
    this.stop = function(){
        this.started = false;
    };
    this.drive = function(){
        if( this.started){
            console.log( this.make + " "+ this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first!");
        }
    };
}


var chevyParams = {make: "Chevy",
                   model:  "Bel Air",
                   year: 1957,
                   color: "red",
                   passengers: 2,
                   convertible: false,
                   mileage: 1021};
                   
var chevy = new Car(chevyParams);



var cadiParams = { make: "GM",
                   model: "Cadillac",
                   year: 1955,
                   color: "tan",
                   passengers: 5, 
                   convertible: false,
                   mileage: 12892 };
                   var cadi = new Car(cadiParams);

var cadi = new Car(cadiParams);

var taxiParams = {
    make: "Webwille Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 28134
};
var taxi = new Car(taxiParams);


var carTestParams = {
    make: "Webville Motors",
    model:  "Taxi",
    year: 2014,
    color: "marine",
    passengers: 2,
    convertible: true,
    mileage: 21
};
var testCar = new Car(carTestParams);

var cars =[chevy, cadi, taxi, testCar];
for( var i =0; i < cars.length; i++){
cars[i].start();
cars[i].drive();
cars[i].drive();
cars[i].stop();
}