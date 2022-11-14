/// <reference types="cypress" />

class SignUpPage {
  enterAccountInformation() {
    return cy.get(".login-form .text-center:nth-child(1) b");
  }

  titleRadioButton() {
    return cy.get("input[type='radio']");
  }

  nameInputField() {
    return cy.get("input[type='radio']");
  }

  emailInputField() {
    return cy.get("input[type='radio']");
  }

  passwordInputField() {
    return cy.get("input[type='radio']");
  }

  dayField() {
    return cy.get("input[type='radio']");
  }

  monthField() {
    return cy.get("input[type='radio']");
  }

  yearField() {
    return cy.get("input[type='radio']");
  }

  newsLetterButton() {
    return cy.get("input[type='radio']");
  }

  specialOffersButton() {
    return cy.get("input[type='radio']");
  }

  /** Address Information */

  firstNameField() {
    return cy.get("input[type='radio']");
  }

  lastNameField() {
    return cy.get("input[type='radio']");
  }

  addressField() {
    return cy.get("input[type='radio']");
  }

  address2Field() {
    return cy.get("input[type='radio']");
  }

  countryField() {
    return cy.get("input[type='radio']");
  }

  stateField() {
    return cy.get("input[type='radio']");
  }

  cityField() {
    return cy.get("input[type='radio']");
  }

  zipcodeField() {
    return cy.get("input[type='radio']");
  }

  mobileNoField() {
    return cy.get("input[type='radio']");
  }

  createAccountButton() {
    return cy.get("input[type='radio']");
  }
}

export default new SignUpPage();
