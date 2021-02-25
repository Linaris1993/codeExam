import { userInfo } from "../data/data";

   class checkOutPage{
 get checkOutBtn() { return $('.checkout_button') };
 get firstNameField() {return  $('#first-name') };
 get lastNameField() { return $('#last-name') };
 get zipCodeField() { return $('#postal-code') };
 get continueBtn() { return  $('.cart_button') };
 get finalTotal() { return $('.summary_total_label') };
 get finishBnt() { return $('.cart_button') };
 get finalPageLabel() { return $('.subheader') };

   setCheckOutFlow() {
      browser.waitUntil(() => this.firstNameField.isDisplayed());
      this.firstNameField.setValue(userInfo.firstName);
      this.lastNameField.setValue(userInfo.lastName);
      this.zipCodeField.setValue(userInfo.zip);
      if (this.continueBtn.isClickable()){
          this.continueBtn.click();

      }
};
}
export default new checkOutPage();