//3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let a="NoOrUlAiN hAmid";
console.log(a);
console.log(a.toLowerCase());
console.log(a.toUpperCase());

function titleCase(str: string) {
    return str.toLowerCase().split(' ').map(function 
(word: string) {
return word. charAt(0) .toUpperCase() + word.slice(1);
}).join(' ');
}

console.log(titleCase(a));