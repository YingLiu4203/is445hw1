import { loadJson, HttpError } from './lib.js'
import { printUsers, showError } from './print.js'

loadJson()
  .then(users => printUsers(users))
  .catch(e => {
    showError(e)
  })
