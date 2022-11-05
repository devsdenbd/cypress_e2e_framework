/// <reference types="cypress" />
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
 const allureWriter = require("@shelex/cypress-allure-plugin/writer");
 const { isFileExist, findFiles } = require('cy-verify-downloads');
 const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
 module.exports = (on, config) => {
  require("cypress-mochawesome-reporter/plugin")(on);
  allureWriter(on, config);
   on('task', { downloadFile });
   on('task', { deleteDownloads(){
     console.log('deleting downloads')
       return new Promise((resolve) => {
         rmdir('cypress/downloads', { recursive: true }, () => {
           resolve(null)
         })
       })
   } });
 };
