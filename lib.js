export class HttpError extends Error {
  constructor(message) {
    super(message)
    this.name = 'HttpError'
  }
}

export function loadJson() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new HttpError(`error in response: ${$response}`)
      }
    })
    .catch(e => {
      throw new HttpError(`network error ${e.message}`)
    })
}
