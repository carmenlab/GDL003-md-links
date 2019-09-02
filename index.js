const path = require('path');
const fs = require('fs');
//const r2 = require("r2");
const axios = require('axios');
const mdLinks ={};
const filePath = process.argv[2];
const validate = process.argv[3] === '--validate';
const stats = process.argv[4] === '--stats';
//const url = "https://es.wikipedia.org/wiki/Markdown";
//const url = 'http://algo.com/2/3/';

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
  //const findUrl = /\[([^\[\]])+\]\(([^\(\)])+\)/gi; otro
  //const findUrl = /(\(.*\))/gm; //texto y url
  //const findUrl = /(https?:\/\/[\w\d./?=#]+)/gi; //ok links
  const findUrl = /(http[s]?:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)?)/gi;
  //const findUrl = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/gi;
  //const findUrl ='\[(.+)\]\(([^]+)(?:"(.+)")?\)';
  let linksFound =  data.match(findUrl);
  
 // if (linksFound){
    console.log('Successful match: ', linksFound);
  /*} else { 
    console.log('No match'):
}*/
  if (validate) {
    mdLinks.validateLink(linksFound);
  };
return linksFound;
});

/*mdLinks.validateLink = async url => {
  try {
    const response = await r2(url).json;
    //console.log(response);
    console.log('ver mensaje');
  } catch (error) {
    console.log(error);
  }
};
mdLinks.validateLink(url);
*/
//Validate with http.get o https.get 
/*
mdLinks.validateLink =  url => {
  let linkValidate = 0;
  //let linkBroken = 0;
  for(let i = 0; i < url.length; i++) {
    const urlProtocol = url[i].startsWith('https') ? require('https') : require('http');
    const request =  urlProtocol.get(url[i], (response)=>{
      console.log([i] + ' '+ url[i] + ' ' + response.statusMessage,  response.statusCode);
    //  linkValidate++;
    });
    request.on('error', (error) => {
      console.error ([i] + 'fail ' + error.status);
    });
  }
  
  if (stats) {
    //console.log('\n Total: ' + url.length + '\n Unique: '+ linkValidate + '\n Broken: '+ linkBroken);
    console.log('\n Total: ' + url.length + '\n Unique: '+ linkValidate + '\n Broken: ');
  }
}*/

 // mdLinks.validateLink(url);

 /***** Validate with Library Axios*/
  mdLinks.validateLink = async url => {
  let linkValidate = 0;
  let linkBroken = 0;
  for(let i = 0; i < url.length; i++) {
    try {
        //const response = await axios.get(url);
        const response = await axios.head(url[i]);
        //const data = response.data;
        const status = response.status;      
        console.log(url[i] + ' ok', status);
        linkValidate++;
    } catch (error) {
      linkBroken++;
      console.log(url[i] + ' fail', error.message);
      }
  }
  
  if (stats) {
  console.log('\n Total: ' + url.length + '\n Unique: '+ linkValidate + '\n Broken: '+ linkBroken);
  }
  };
/******************/


  //console.log(mdLinks.mdReadFile('readme.md', () => {}));
  mdLinks.mdReadFile(filePath);
  module.exports = mdLinks
 
 /*
  module.exports = {
    mdSearch,
    mdReadFile,
    validateLink
}
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
