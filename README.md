# Playwright Automation Framework – SauceDemo
This repository showcases an **end-to-end UI automation framework** built using **Playwright with JavaScript**. The project follows the **Page Object Model (POM)** design pattern to ensure the test code remains structured, reusable, and easy to maintain as the test suite grows.

The framework automates key user journeys in the SauceDemo e-commerce application, including login validation, adding products to the cart, verifying items in the cart, and completing the checkout process. It also demonstrates how automated tests can be used to validate both positive and negative user scenarios.

Overall, this project highlights how a modern UI automation framework can be designed to create scalable, maintainable, and reliable automated tests for web applications.
## Tech Stack
* Playwright
* JavaScript
* Node.js
* Page Object Model (POM)
## Automated Test Scenarios
The framework covers the following test cases:
* User login with valid credentials
* Login validation with invalid credentials
* Add product to cart
* Verify product in cart
* Complete checkout flow
  
## Project Structure
* pages/ – Page Object classes containing locators and reusable page actions
* tests/ – Automated test scenarios
* utils/ – Test data and reusable utilities
* playwright.config.js – Playwright configuration file
* package.json – Project dependencies and scripts

## How to Run Tests
Install dependencies:

npm install
  
Run all tests:

npx playwright test
  
Run tests with visible browser:

npx playwright test --headed
  
View test report:

npx playwright show-report

## Application Under Test
SauceDemo – Demo e-commerce application used for automation practice
https://www.saucedemo.com
## Author
Archana Puppireddy
