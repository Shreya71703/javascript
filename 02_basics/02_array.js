const marvel_Heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ("superman", "batman", "flash")

marvel_Heroes.push(dc_heroes)

console.log(marvel_Heroes);

const all_new_heroes = [...marvel_Heroes, ...dc_heroes]

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7 , [6, 7 [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shreya"));
console.log(Array.from("Shreya"));
console.log(Array.from({name: "shreya"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));