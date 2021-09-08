var object = {
        name: "Dymka",
        details: {
            type: "cat",
            color: "grey",
            size: "normal",
        }
    }
    //console.log(object)

var obj = new Object({
        name: "Tile",
        details: {
            size: "small",
            color: "white"
        }
    })
    //console.log(obj['details']['size'])

var a = ['dog', 'cat', 'mouse']
    //console.log(a.toString)




function calc() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}
//console.log(calc(4, 5, 6));



function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.createModyName = function() {
    return this.first + ' ' + this.last;
}
Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
}

s = new Person("Anna", "Sapun");
//console.log(s);
//console.log(s.createModyName);
//console.log(s.firstNameCaps);