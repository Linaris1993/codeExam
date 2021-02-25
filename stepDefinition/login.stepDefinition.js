import { Given, When, Then } from 'cucumber';
import loginPage from "../PageObject/loginPage";
import url from "webdriverio/build/commands/browser/url";
import { standardUser, text } from "../data/data";

    Given (/^I'm on the Login Page$/, () => {
        browser.url('https://www.saucedemo.com');
});

    When (/^I login with valid credentials$/, () => {
        loginPage.LoginAs(standardUser);
});

    Then (/^I should be on SWAGLABS Home page$/, () => {
        expect(loginPage.productLabelHomePage.getText()).toEqual(text.productLabelHomePage);
});
