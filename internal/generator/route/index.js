/**
 * Component Generator
 */

const routeExists = require('../utils/routeExists');

module.exports = {
  description: 'Add new Page & Routes',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'dummy',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return routeExists(value) ? 'A reducer or action with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'input',
    name: 'path',
    message: 'What is routing path ? \r\nRef: https://github.com/ReactTraining/react-router/blob/master/docs/guides/RouteMatching.md \r\n',
    default: 'dummy',
  }, {
    type: 'list',
    name: 'type',
    message: 'Select the type of container (Standalone, BaseContainer)',
    default: 'BaseContainer',
    choices: () => ['Standalone', 'BaseContainer'],
  }],
  actions: (data) => {
    // Generate index.js {{properCase name}}.js
    const actions = [
      {
        type: 'add',
        path: '../../src/routes/{{properCase name}}/index.js',
        templateFile: './route/route.js.hbs',
        abortOnFail: true,
      }, {
        type: 'add',
        path: '../../src/routes/{{properCase name}}/components/{{properCase name}}View.js',
        templateFile: `./route/view_${data.type}.js.hbs`,
        abortOnFail: true,
      }, {
        type: 'add',
        path: '../../src/routes/{{properCase name}}/containers/{{properCase name}}Container.js',
        templateFile: `./route/container.js.hbs`,
        abortOnFail: true,
      }, {
        type: 'modify',
        path: '../../src/routes/_routeTable.js',
        pattern: /\/\/{append_module_here}/g,
        template: '{{ properCase name}},\r\n  $&',
        abortOnFail: true,
      }, {
        type: 'modify',
        path: '../../src/routes/_routeTable.js',
        pattern: /\/\/{append_include_here}/g,
        template: 'import {{ properCase name}} from \'./{{ properCase name}}\'\r\n$&',
        abortOnFail: true,
      }
    ];

    return actions;
  },
};
