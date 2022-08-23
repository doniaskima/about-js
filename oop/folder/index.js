// Objects

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    draw: function() {
        console.log("draw");
    }
}

circle.draw();

//Factories


function createCircle(radius) {
    return {
        radius: radius, // or radius
        draw: function() {
            console.log("draw");
        }
    };
}
const circle = createCircle(1);
circle.draw();

//constructors

function Circle(radius) {
    this.radius = radius; // this is basically a reference to the object that is executing this piece of code
    this.draw = function() {
        console.log("draw");
    };
}

// call method
Circle.call({}, 1) //this expression is exactly expression line 11 
Circle.apply({}, [1, 2, 3])
const another = new Circle(1);


//value or primitive types :
//Number+ String + Boolean +Symbol +undefined +null

// Reference Types :
// Object + function + Array

// Primitives are copied by their value
// Objects ar copied by their reference