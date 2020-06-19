// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'check login function': browser => {
    const lp = browser.page.loginPage();
    const rp = browser.page.reminderPage();

    lp.navigate();
    lp.setValue('@textField', 'kosei');
    lp.setValue('@passwordField', 'Wtct3b77');
    lp.click('@loginButton');
    rp.waitForElementVisible('@appContainer', 1000);
    rp.assert.urlEquals('http://localhost:8081/');
  },

  'check logout function': browser => {
    const lp = browser.page.loginPage();
    const rp = browser.page.reminderPage();

    rp.click('@logoutButton');
    lp.waitForElementVisible('@appContainer', 1000);
    lp.assert.urlEquals('http://localhost:8081/login');
  }
}
