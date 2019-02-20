const Linter = require('standard-engine').linter
const options = require('./options')

module.exports = new Linter(options)
