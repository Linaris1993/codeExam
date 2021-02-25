import {Given, When, Then } from 'cucumber';
import {text} from "../data/data";
import ShoppingFlowPage from "../PageObject/ShoppingFlowPage";

    Given (/^I'm on the Home Page$/, () => {
   browser.url('https://www.saucedemo.com/inventory');
});
    When (/^I click on sort items field$/, () => {
    ShoppingFlowPage.sortItemField.click();
});
    Then (/^Dropdown menu appears and i can sort items by price lowest->Highest$/, () => {
    ShoppingFlowPage.priceDropDown.click();
});
    Then(/^Lowest Price Item located first on Page$/, () => {
    expect(ShoppingFlowPage.lowestPriceItem.getText()).toEqual(text.LowestPriceItem);
});
    When (/^I click on item$/, () => {
    ShoppingFlowPage.item_4.click();
});
    Then(/^I can add Item to Cart and continue shopping$/, () => {
        browser.waitUntil(() => ShoppingFlowPage.addToCartBtn.isDisplayed());
        ShoppingFlowPage.AddToCardAndGoBack();
 });
     Then(/^I click on other item$/, () => {
         ShoppingFlowPage.item_3.click();
});
     Then(/^I get redirected back to The View Item Page$/, () => {
         browser.waitUntil(() => ShoppingFlowPage.addToCartBtn.isDisplayed());
});
     Then(/^I can add item to Cart and continue shopping$/, () => {
         ShoppingFlowPage.AddToCardAndGoBack();
});
    When(/^I can click on shopping cart button$/, () => {
        ShoppingFlowPage.shoppingCardBtn.click();
    })

    Then (/^I can view shopping cart with items$/, () => {
    expect(ShoppingFlowPage.item_4).toBeDisplayed();
    expect(ShoppingFlowPage.item_3).toBeDisplayed();
});
    Then(/^I can remove first item from shopping cart$/, () => {
       ShoppingFlowPage.removeBtn.click();
});
    Then(/^I can continue shopping$/, () => {
        ShoppingFlowPage.continueShopping.click();
});
    Then(/^I can add another item to the shopping cart from Home Page$/, () => {
        browser.waitUntil(() => ShoppingFlowPage.item_0.isDisplayed());
        ShoppingFlowPage.item_0_AddToCart.click();
});
    When(/^I can click on shopping cart btn$/, () => {
        ShoppingFlowPage.shoppingCardBtn.click();
});
    Then(/^I can view just added item in the shopping cart$/, () => {
        expect(ShoppingFlowPage.item_0).toBeDisplayed();
});
