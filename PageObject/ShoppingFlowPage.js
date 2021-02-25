
class ShoppingFlowPage{
    get sortItemField() { return $('.product_sort_container') };
    get priceDropDown() { return $('//option[@value="lohi"]') };
    get lowestPriceItem() { return $$('.inventory_item_price')[0] };
    get item_4() { return $('#item_4_title_link') };
    get item_3() { return $('#item_3_title_link') };
    get item_0() { return $('#item_0_title_link') };
    get item_0_AddToCart() { return $('//*[@class="inventory_item" and div/a[@id="item_0_title_link"]]//button[@class="btn_primary btn_inventory"]') };
    get addToCartBtn() { return $('.btn_inventory') };
    get backToHomePageBtn() { return $('.inventory_details_back_button') };
    get shoppingCardBtn() { return $('#shopping_cart_container') };
    get removeBtn() { return $$('.cart_button')[0]; }
    get continueShopping() { return $('//a[@class="btn_secondary"]') };

    AddToCardAndGoBack(){
    this.addToCartBtn.click();
    this.backToHomePageBtn.click();
  };

}
export default new ShoppingFlowPage();