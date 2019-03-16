import { loadJson, HttpError } from './lib.mjs'
import { printUsers, showError } from './print.mjs'

loadJson()
  .then(users => printUsers(users))
  .catch(e => {
    showError(e)
  })
