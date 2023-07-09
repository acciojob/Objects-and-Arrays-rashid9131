let players = ['John', 'Mike', 'Sarah', 'Emily'];
let person = {
  name: 'Alex',
  age: 25,
  city: 'New York'
};

let team = players;
let team1 = [...players];
let cap1 = { ...person };

console.log(team);
console.log(team1);
console.log(cap1);
