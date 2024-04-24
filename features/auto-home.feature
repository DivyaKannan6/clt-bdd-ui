 Feature: As a autoexercise customer, I want to be able to navigate to landing page so that I can view product information

  @auto @atest1
    Scenario: Customer is displayed with autoexercise.com home page
       Given I am on the autoexercise portal
         When I click on "Signup / Login"
         Then I should see "Login to your account"