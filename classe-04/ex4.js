const classA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
const classB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
const classC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

let allClasses = [...classA, ...classB];

const [zero, one, , , four, five] = classC;

allClasses = allClasses.concat(classC[0], classC[1], classC[4], classC[5]);

console.log(allClasses);


