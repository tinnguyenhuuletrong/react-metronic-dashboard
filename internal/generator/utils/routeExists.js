/**
 * routeExists
 *
 * Check whether the given route exist in either the routes or containers directory
 */

const fs = require('fs');
const pageRoutes = fs.readdirSync('src/routes');
const routes = pageRoutes;

function routeExists(comp) {
  return routes.indexOf(comp) >= 0;
}

module.exports = routeExists;
