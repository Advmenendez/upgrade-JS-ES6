/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let studentsName = users.map((student) => {
    return student.name
});
console.log(studentsName);


/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */

let studentsAnacletoName = users.map((student) => {
    return student.name.charAt(0) === 'A' ? student.name = 'Anacleto' : student.name;
});

let studentsAnacletoNameIf = users.map((student) => {
    if (student.name.charAt(0) === 'A') {
        student.name = 'Anacleto'
    }
    return student.name;
});

console.log(studentsAnacletoName);
console.log(studentsAnacletoNameIf);
/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let visitedCities = cities.map((city) =>{
    return city.isVisited ? city.name = `${city.name} Visited` : city.name;
})

console.log(visitedCities)