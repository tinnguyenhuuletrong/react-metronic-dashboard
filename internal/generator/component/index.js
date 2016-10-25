/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['ES6 Class', 'Stateless Function'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js {{properCase name}}.js
    const actions = [{
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.js',
      templateFile: './component/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/{{properCase name}}.js',
      templateFile: data.type === 'ES6 Class' ? './component/es6.js.hbs' : './component/stateless.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
