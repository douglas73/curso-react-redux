const logger = require('./logger.js')

logger.info('Um teste usando o bundle de logger.js')

var Data = new Date()

console.log(`Webpack  Executado em   
    ${Data.getDate()}/${Data.getMonth()}/${Data.getUTCFullYear()}
     as ${Data.getUTCHours()}:${Data.getUTCMinutes()}`)