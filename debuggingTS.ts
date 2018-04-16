// Setting Types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Problem was trying to pass in an int when a string was declared.
myString = "9";

// Setting Types For Function Params

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Problem was trying to pass in an int when a string was declared.
 console.log(sayHello("9"));

// Optional Params

 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name? Enter empty string
 console.log(fullName("Jimbo", "", "Jones"));

// Interfaces and Function Params

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4                // BELT was misspelled. Added "s"
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));


//Classes and Function Params

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("firstName", "lastName");          // added 1) "new" to instantiate the constructor and 2) ("firstname", "lastname") inside the parameters bc it was expecting 2 argument.
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

// Arrow Functions

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => (x*x);            // added parentheses
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => (x * y);
console.log(multiply(2, 4));        // added parentheses
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(2, 3));            // added parentheses and moustaches

// Arrow functions and "this"

class Elephant {
    constructor(public age: number){}
    birthday = age =>             // passed in age as argument
       this.age++;
 }
 
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.