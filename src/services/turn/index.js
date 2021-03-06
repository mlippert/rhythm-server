'use strict'

const service = require('feathers-mongoose')
const turn = require('./turn-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this          // eslint-disable-line consistent-this

  const options = {
    Model: turn
  }

  // Initialize our service with any options it requires
  app.use('/turns', service(options))

  // Get our service so that we can bind hooks
  const turnService = app.service('/turns')

  // Set up our hooks
  turnService.hooks(hooks)
}
