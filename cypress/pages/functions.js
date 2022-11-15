/// <reference types="cypress" />

class BasicFunc {
  ValidatePageTitle(title) {
    return cy.title().then((value) => {
      expect(value).to.be.eq(title);
      expect(value).not.to.be.empty;
      expect();
    });
  }

  generateEmailAndPassword(ranEmail, ranPassword) {
    function makeId(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
      }
      return result;
    }
    console.log(makeId(5));
    ranEmail = makeId(8) + "@mail.com";
    ranPassword = makeId(8);
  }
}
export default new BasicFunc();
