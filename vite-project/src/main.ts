import foo from "./fun";
import User from "./user";

// let x = 12;

// Gamla från JS: number, string, boolean...
// Nya med TS: any

// console.log(x);

// thing : datatyp

const o: User = {
	name: "Niklas",
	age: 47,
	hobby: "läsa böcker",
};

foo(o);

let arr: User[] = [   //Detta kan man skriva i user.ts istället då deta tillhör user
	{
		name: "Stina",
		age: 78,
		hobby: "läsa böcker",
	},
	{
		name: "Mio",
		hobby: "baka bullar",
    age: 20,
	},
  {
		name: "Anna",
		hobby: "Rider",
    age: 28,
	},
];

/*                         //Använde for in loop för att välja flera användare
arr = [arr[1], arr[2]];

for(let user of arr){
  console.log(`name: ${user.name}, age: ${user.age}, hobby: ${user.hobby}`);
}
*/

//⭐
