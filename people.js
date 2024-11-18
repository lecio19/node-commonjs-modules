const { fullNames } = require('./names.js');
const {hobbies} = require("./hobbies.js");

const completeName = fullNames("Alessio", "Macrì");
console.log(completeName); 

const hobby = hobbies("basket", "Anime", "tennis");
console.log(hobby)