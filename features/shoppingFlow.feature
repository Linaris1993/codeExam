  Feature: Shopping Flow

  Background:
    Given I'm on the Home Page

  Scenario: I can sort items, add and remove items to/from shopping card and add them again
    When I click on sort items field
    Then Dropdown menu appears and i can sort items by price lowest->Highest
    Then Lowest Price Item located first on Page
    When I click on item
    Then I can add Item to Cart and continue shopping
    When I click on other item
    Then I get redirected back to The View Item Page
    Then I can add item to Cart and continue shopping
    Then I can click on shopping cart button
    Then I can view shopping cart with items
    Then I can remove first item from shopping cart
    Then I can continue shopping
    Then I can add another item to the shopping cart from Home Page
    When I can click on shopping cart btn
    Then I can view just added item in the shopping cart

  Scenario: I can do checkout
    When I click on shopping card btn
    Then I can click on checkout btn
    Then I got redirected to user's info field page and I can filled all fields
    Then I get redirected to checkout overview page to see shopping items and total price
    When I click on finish btn
    Then I got redirected to the final page
