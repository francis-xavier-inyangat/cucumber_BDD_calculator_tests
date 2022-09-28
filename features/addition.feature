@tag1
Feature: Add Numbers
  As a user of the calculator
  I want to add 2 numbers

  @tag2
  Scenario: Add 2 small numbers
    Given the calculator is cleared
    When I add 5 and 6
    Then the result should be 11

  @tag3
  Scenario: Add 2 big numbers
    Given the calculator is cleared
    When I add 56 and 67
    Then the result should be 123

  Scenario: Add 2 large numbers
    Given the calculator is cleared
    When I add 2353533534 and 2353533534
    Then the result should be 4707067068

  Scenario: Add 2 large numbers
    Given the calculator is cleared
    When I add 4707067068 and 4707067068
    Then the result should be 9414134136

  Scenario: Add 2 large numbers
    Given the calculator is cleared
    When I add 9414134136 and 9414134136
    Then the result should be 18828268272

  Scenario: Add 2 large numbers
    Given the calculator is cleared
    When I add 37656536544 and 37656536544
    Then the result should be 75313073088    