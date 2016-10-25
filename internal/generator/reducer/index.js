/**
 * Component Generator
 */

const reducerExists = require('../utils/reducerExists');

module.exports = {
  description: 'Add reducer',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'dummy',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return reducerExists(value) ? 'A reducer or action with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js {{properCase name}}.js
    const actions = [{
      type: 'add',
      path: '../../src/reducers/{{lowerCase name}}/index.js',
      templateFile: './reducer/reducer.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/actions/{{lowerCase name}}.js',
      templateFile: './reducer/action.js.hbs',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '../../src/reducers/index.js',
      pattern: /export default {/g,
      template: '$&\r\n  {{ camelCase name}} : {{ properCase name }},',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '../../src/reducers/index.js',
      pattern: /import/g,
      template: 'import {{ properCase name}} from \'./{{ lowerCase name}}\'\r\n$&',
      abortOnFail: true,
    }];

    return actions;
  },
};
