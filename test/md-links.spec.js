//Por ahora esta sera la funcion que nos diga si una ruta apunta a un archivo markdown o no
const mdLinks = require('../index.js');


describe('mdSearch', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks.mdSearch('../README.md')).toBe(true);
    //console.log('FIX ME!');
  });

  it('should return false for an invalid .md file', () => {
    expect(mdLinks.mdSearch('../index.js')).toBe(false);
    //console.log('FIX ME!');
  });

});

describe('mdReadFile', () => {
   
  it('Should return all the links for the .md file', () => {
    mdLinks.mdReadFile('../README.md',(data) => {
      expect(data).toBe(linkFound);
    });
  });
/*
  it('should return the links', () => {
    expect(mdLinks.mdReadFile('README.md')[0]).toBe('https://es.wikipedia.org/wiki/Markdown');
  });
*/
});
