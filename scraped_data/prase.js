import jsonLinks from './Links.json' assert {type: 'json'};
import jsonNames from './Names.json' assert {type: 'json'};
let parsedLinks = JSON.parse(jsonLinks);
let parsedNames = JSON.parse(jsonNames);
console.log(parsedLinks)