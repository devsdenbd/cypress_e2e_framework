/// <reference types="cypress" />

import homepage from "../pages/homePage";
import baseFunc from "../pages/functions";
import loginPage from "../pages/loginPage";
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

describe("Register User on page", () => {
  it("Navigating to the website", () => {
    homepage.open(Cypress.env("homePage"));
  });

  it("Homepage navigation verification", () => {
    cy.validUrl("exercise", Cypress.env("homePage"));
    baseFunc.ValidatePageTitle("Automation Exercise");
  });

  it("Click On Signup/Login Button", () => {
    homepage
      .signInButton()
      .should("be.visible")
      .should("have.attr", "href", "/login")
      .realHover()
      .realClick();
  });

  it("New User SignUp is visible", () => {
    cy.contains("New User Signup!")
      .should("be.visible")
      .should("have.text", "New User Signup!");
  });

  it("Enter name and email address", () => {
    loginPage
      .signUpName()
      .should("be.visible")
      .should("have.attr", "placeholder", "Name")
      .type(Cypress.env("name"));

    loginPage
      .signUpPassword()
      .should("be.visible")
      .should("have.attr", "placeholder", "Email Address")
      .type(Cypress.env("email"));
  });

  it("Click Signup button", () => {
    loginPage
      .signUpButton()
      .should("not.be.hidden")
      .should("have.class", "btn btn-default")
      .should("have.attr", "type", "submit")
      .should("be.enabled")
      .realClick();

    cy.url().then((url) => {
      expect(url).to.contain("/signup");
    });

    homepage.signInButton().then((btn) => {
      expect(btn).to.have.css("color", "rgb(255, 165, 0)");
    });
  });
});
