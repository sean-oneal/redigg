export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      //Backup example reddit data
      data: require('../Fixtures/redditExampleData.json')
    }
  }
  // getRate: () => {
  //   return {
  //     ok: true,
  //     data: require('../Fixtures/rateLimit.json')
  //   }
  // },
  // getUser: (username) => {
  //   // This fixture only supports gantman or else returns skellock
  //   const gantmanData = require('../Fixtures/gantman.json')
  //   const skellockData = require('../Fixtures/skellock.json')
  //   return {
  //     ok: true,
  //     data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
  //   }
  // }
}
