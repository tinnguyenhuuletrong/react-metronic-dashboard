/**
 * reducerExists
 *
 * Check whether the given reducer exist in either the reducers or containers directory
 */

const fs = require('fs');
const pageActions = fs.readdirSync('src/actions');
const pageReducers = fs.readdirSync('src/reducers');
const reducers = pageActions.concat(pageReducers);

function reducerExists(comp) {
  return reducers.indexOf(comp) >= 0;
}

module.exports = reducerExists;
