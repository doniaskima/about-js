// const person = {
//     name: "Donia",
//     walk() {},
//     talk() {}
// }

// person.talk();

// const targetMember = "name";
// person[targetMember.value] = "John";
// console.log(person);

const person = {
    name: "Donia",
    walk() {
        console.log(this); // this returning a reference to this person object
    },
};
person.walk();
// const walk = person.walk; // right now walk is a func
// walk() // the global object which the windoww object in browsers

// Strict mode it's basically a mode to execute  javascript in a more protective way so it's prevents potential problems

// Binding this

const walk = person.walk.bind(person);
walk();

const Donia = {
    drink() {
        let self = this;
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    },
};

Donia.drink();

//map() tranform eachelement in this array
const color = ["red", "green", "blue"];
const items = color.map((color) => `<li>${color}</li>`);
console.log(items);

// Object Destructring !

const address = {
    street: '',
    city: '',
    country: ''
}
const street = address.street;
const city = address.city;
const country = address.country;
//  repetitive adress  :( so sln ?

const { street, city, country } = address;

// That 's where the object destructuring syntax is useful: you can read a property and assign its value to a variable without duplicating the property name.
// More than that, you can read multiple properties from the same object in just one statement!

// spread Operator !

const first = [1, 2, 3]
const second = [4, 5, 6];
const combined = first.concat(second);
const combined = [...first, 'a', ...second];
const clone = [...first];
console.log(first);
console.log(clone);
//---------------// 
const first = { name: "donia" };
const second = { job: "learner" };
const combined = {...first, ...second, location: "toulon" }
console.log(combined);



//Classes
//A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.
// A JavaScript class is not an object.
// It is a template for JavaScript objects.

const personName = {
    name: "Doniaa",
    walk() {
        console.log("walk")
    }
}
const personName2 = {
    name: "Doniaa",
    walk() {
        console.log("walk");
    },
};

// how a class can help us solve this problem
class CoolPerson {
    //A constructor is a special function that creates and initializes an object instance of a class.
    constructor() {
        this.name = name;
    }
    walk() {
        console.log("walk");
    },
}
const person = new CoolPerson("donia") // the new operator is very important here when we have a class to create an object using that class or that blueprint we need to use the new operator


// inheritance :)
class Person {
    cunstructor(name) {
        this.name = name
    }
    walk() {
        console.log("walk");
    }
}

class Teacher extends Person {
    cunstructor(name, degree) {
        super(name); // references the parent class
        this.degree = degree
    }
    teach() {
            console.log('teach')
        }
        // okay however all teachers should be able to walk cuz they are all person we don't want to duplicate this method in person and teacher classes
        //2 solutions : inheritance or composition
}

const teacher = new Teacher("Donia", "Master science");