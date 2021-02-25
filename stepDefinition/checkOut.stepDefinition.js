import { Given, When, Then } from 'cucumber';
import checkOutPage from "../PageObject/checkOutPage";
import ShoppingFlowPage from "../PageObject/ShoppingFlowPage";
import {text} from "../data/data";

    Given (/^Checkout Page$/, () => {
    browser.url('https://www.saucedemo.com/cart');
});
    When (/^I click on shopping card btn$/, () => {
        ShoppingFlowPage.shoppingCardBtn.click();
});
    Then(/^I can click on checkout btn$/, () => {
        browser.waitUntil(() => checkOutPage.checkOutBtn.isDisplayed());
        checkOutPage.checkOutBtn.click();
});
    Then(/^I got redirected to user's info field page and I can filled all fields$/, () => {
        checkOutPage.setCheckOutFlow();
});
    Then (/^I get redirected to checkout overview page to see shopping items and total price$/, () => {
        ShoppingFlowPage.item_3.isDisplayed;
        ShoppingFlowPage.item_0.isDisplayed;
        expect(checkOutPage.finalTotal.getText()).toEqual(text.finalTotal);
});
    When(/^I click on finish btn$/, () => {
        checkOutPage.finishBnt.click();
});
    Then(/^I got redirected to the final page$/, () => {
        expect(checkOutPage.finalPageLabel.getText()).toEqual(text.finalPageLabel);
});

