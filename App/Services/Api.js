// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor" for making requests to Reddit
const create = (baseURL = 'https://www.reddit.com/') => {

  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getRoot = () => api.get('.json')
  // const getRate = () => api.get('rate_limit')
  // getSubReddit = () => api.get('/r', {q, subReddit})
  // const getUser = (username) => api.get('search/users', {q: username})

  return {
    // a list of the API functions from step 2
    getRoot,
    // getRate,
    // getSubReddit
    // getUser
  }
}

// Return back our create method as the default.
export default {
  create
}
