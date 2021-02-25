  Feature: Performing a Login

  Background:
    Given I'm on the Login Page

  Scenario: As a user I can login
    When I login with valid credentials
    Then I should be on SWAGLABS Home page



