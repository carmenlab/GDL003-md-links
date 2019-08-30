const path = require('path');
const fs = require('fs');
let mdLinks ={};
const filePath = process.argv[2];

//mdlinks
mdLinks.mdSearch =  filePath => path.extname(filePath)==='.md';
//console.log(mdLinks.mdSearch('readme.md'));

mdLinks.mdReadFile = (filePath) => fs.readFile(filePath,'utf8', (err, data) => {
  //console.log(filePath)
//mdLinks.mdReadFile = filePath => fs.readFile(filePath,'utf8', (err, data) => {
//mdLinks.mdReadFile = fs.readFile('readme.md','utf8', (err, data) => {
  if (err) throw err;  
//console.log(data);
  //const findUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  //const findUrl = /\[([^\[]+)\](\(.*\))/gm; //texto y url
  //const findUrl = /(\(.*\))/gm; //texto y url
  //const findUrl = /(https?:\/\/[\w\d./?=#]+)/gi; //ok links
  const findUrl = /(http[s]?:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)?)/gi;

  //const findUrl = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/gi;
  //const findUrl ='\[(.+)\]\(([^]+)(?:"(.+)")?\)';
  let linksFound =  data.match(findUrl);
  
 // if (linksFound){
    console.log("Successful match: ", linksFound);
  /*} else { 
    console.log("No match"):
}*/
return linksFound;
});
  //console.log(mdLinks.mdReadFile('readme.md', () => {}));
  //mdLinks.mdReadFile('readme.md');
  mdLinks.mdReadFile(filePath);

module.exports = mdLinks
/*module.exports = () => {
  // ...
};
*/
//module.exports =  filePath => path.extname(filePath)==='.md';



/*module.exports = (filePath) => {
  if (path.extname(filePath)==='.md'){
      // Returns: '.md'
    return true;
  }
    return false;
};*/


//mdlinks
/*module.exports = (filePath) => {
 return path.extname(filePath)==='.md' ? true : false;//Ternario: ?:
 };*/

//module.exports = (filePath) => path.extname(filePath)==='.md' ? true : false;
//se puede quitar los parentesis cuando solo es un parametro)

//module.exports = filePath => path.extname(filePath)==='.md' ? true : false; 
//cualquier expresion en javascript devuelve true o false

//module.exports = filePath => path.extname(filePath)==='.md';
