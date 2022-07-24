// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import chaiSorted from "chai-sorted"
chai.use(chaiSorted)

module.exports = (on) => {
    on('before:browser:launch', (browser = {}, args) => {
      if (browser.name === 'chrome') { 
        // ^ make sure this is your browser name, you may 
        // be using 'canary' or 'chromium' for example, so change it to match!
        args.push('--proxy-bypass-list=<-loopback>')
        return args
      }
    })
  }