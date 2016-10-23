/**
 * generator/index.js
 * Using: plop (https://github.com/amwmedia/plop)
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const componentGenerator = require('./component/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  // plop.addHelper('directory', (comp) => {
  //   try {
  //     fs.accessSync(`src/containers/${comp}`, fs.F_OK);
  //     return `containers/${comp}`;
  //   } catch (e) {
  //     return `components/${comp}`;
  //   }
  // });
  // plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
