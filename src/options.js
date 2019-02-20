const path = require('path')
const pkg = require('../package.json')

module.exports = {
  cmd: 'standard',
  eslint: require('eslint'),
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: pkg.description,
  eslintConfig: {
    configFile: path.join(__dirname, '../.eslintrc.yml')
  }
}
