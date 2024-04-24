  const helpers = require("../runtime/helpers")
 const { assert } = require("chai");
 module.exports = function () {

//Given I am on the "autoexercise" portal

     this.Given(/I am on the autoexercise portal$/, function () {
     return helpers.loadPage(page.autoexercise.url);
     });

     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
          return page.auto.clickElement(objectKey);
     });

     this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
      return page.auto.elementExists(objectKey) 
              });


//     this.When(/^I enter the input "([^"]*)"$/, function(objKey1) {
//         return page.autoexercise.inputElement1(objKey1);
//     });

//     this.When(/^I enter the input in the form field "([^"]*)"$/, function(objKey1) {
//         return page.costco.inputPassword(objKey1);
//     });


//     this.When(/^I enter signInName "([^"]*)"$/, function(objKey1) {
//         return page.costco.inputUserName(objKey1);
//    });
    