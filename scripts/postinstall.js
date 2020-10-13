const appRoot = require('app-root-path');
const debug = require('debug')('stylelint-config-pigify');
const fs = require('fs');

const stringifiedInitialConfig = `const { defaultSeverity, plugins, rules } = require('stylelint-config-pigify');

module.exports = {
  defaultSeverity,
  plugins: [
    ...plugins
    // Add new custom plugins here
  ],
  rules: {
    ...rules
    // Add new or override base rule here
  }
};
`;

/**
 * Generate stylelint.config.js file in project root directory
 */
const generateStylelintConfig = () => {
  debug("Generating stylelint.config.js config file");

  try {
    debug("Saving stylelint.config.js in project root");

    fs.writeFileSync(`${appRoot}/stylelint.config.js`, stringifiedInitialConfig);
  } catch (e) {
    debug("File stylelint was not created!");
    throw e;
  }
};

generateStylelintConfig();
