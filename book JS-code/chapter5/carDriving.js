var cadi = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,

    start: function() {
        this.started = false;
    },
    stop: function(){
        this.started = true;
    },

    drive: function(){
        if (this.started){
            console.log(this.make + " "+ this.model+ " goes ZOOM ZOOM!");
        } else{
            console.log("You need to start engine first.");
        }
    }
};

var chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,

    start: function() {
        this.started = false;
    },
    stop: function(){
        this.started = true;
    },

    drive: function(){
        if (this.started){
            console.log(this.make + " "+ this.model+ " goes ZOOM ZOOM!");
        } else{
            console.log("You need to start engine first.");
        }
    }

};

var taxi = {
    make: 'Webvlle Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,

    start: function() {
        this.started = false;
    },
    stop: function(){
        this.started = true;
    },

    drive: function(){
        if (this.started){
            console.log(this.make + " "+ this.model+ " goes ZOOM ZOOM!");
        } else{
            console.log("You need to start engine first.");
        }
    }

}

cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();


// for in  -  перебор своств обьекта в произвольном прядке
for(var prop in taxi){
    console.log( prop + ": "+ taxi[prop]);
}