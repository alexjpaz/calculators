Feature: As a developer I want to ensure the appliacation starts correctly
  Scenario: Ensure that the application starts
    Given open application
    Then verify chart displays

  Scenario Outline: Ensure that deep links work
    Given open application with params <params>
    Then verify chart displays

    Examples:
      | params                                                               |
      | Co=4.2&Hgb=10.2&SaO2=97&PaO2=74&SvO2=65&PvO2=40&DesiredDO2VO2ratio=4 |

  Scenario Outline: Ensure that the url updates when the form updated
    Given open application
    When update the input <name> with <value>
    Then verify the url parameter <name> equal <value>

    Examples:
      | name | value |
      | Co   | 4.2   |
