let i;

for(let i= 0;  i <5; i++){
    console.log(i);
}
test();

function test(){
    i=1;
    return i;
}


const a = [1,2,5];
const b = [1,2,8];

Array.prototype.sumFirstAndLast = () =>  1;
console.log(a.sumFirstAndLast())
console.log(b.sumFirstAndLast())

const c = [1,2,8];

function teste (){ return 1;}


teste.name = "Christophe";
teste.sayHello = (name)  => 'Hello' +name;


console.log(teste.name);

console.log(teste.sayHello(" João" ));


class Person{
    constructor(name){
        this.name= name;
    }

    hello(){
        return "hello";
    }
}


function Personv2(name, last, age){
    this.name= name;
    this.hello = () => "hello";
}
let p1 = new Person("");
let p2 = new Personv2("","",2)

p1.hello();



let tt = 0;
tt={};
tt='a';
tt=[];
console.log(typeof tt);



const players=["Maradona","Pirlo", "Figo", "Messi"];



players.forEach((item, index) => console.log(`${index}: ${item}`));



players.push("Sapo")
// 0: Maradona
// 1: Pirlo
// 2: Figo
// 3: Messi