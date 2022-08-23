//4 Pillars of Object-oriented Programming

//1-Encapsulation
//2-Abstraction
//3-Inheritance
//4-Polymorphism

//   ------------Encapulation---------------//
let baseSalary = 30000;
let overtime = 10;
let rate = 20;


function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);

}

let employee = {

    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate)
    }
}
employee.getWage();

// ---------------Abstraction-----------------//
//simpler interface and reduce the impact of Change

//Inheritance
//Elimate redondant Code


//Polymorphism
//Poly=Many
//morphism=Form


// Bnefits of oop//
//Encapsulation :reduce complexity + increase reusabilty
//Abstraction : reduce complexity +isolate impact of changes
//inheritance : eliminateredundant code 
//polymorphism : refactor ugly switch /case statements