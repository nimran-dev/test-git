let person ={
    firstname: "Neil",
    lastname: "Armstrong",
    year: 1969,
    occupation: "astronaut"

};
console.log(`On july 20th ${person.year}, ${person.firstname}, ${person.lastname} was the first person to set foot on the Earth's moon.`);

class Greeting{
    constructor(name, place){
        this.name = name;
        this.place = place;
    }

}
let myGreeting = new Greeting ("Neredia", "FL");

myGreeting.hello();