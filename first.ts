const myNumber = 5;
const myName = "Karim";
console.log("Hello From TypeScript", myNumber, myName);

let money: number = 88;
let honey: string = "Honey is good for health";
let funny: boolean = true;

const age: number = 21;

function add(first: number, second: number): number {
  const result = first + second;
  return result;
}

const output: number = add(45, 87);

// multi purpose

/* 
function add(first: number | string, second: number | string): number | string {
  const result: string | number = first + second;
  return result;
}

const output: number = add(45, 87);
const fullName = add("Karim", "Rahim"); 
*/
