'use strict'

const config = require('../config.js')
// const store = require('./store')

const getBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

module.exports = {
  getBooks
}
