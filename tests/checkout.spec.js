const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('User should complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Verify inventory page loaded
  await inventoryPage.expectPageLoaded();

  // Step 3: Add product to cart
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();

  // Step 4: Verify product is visible in cart
  await cartPage.expectProductVisible('Sauce Labs Backpack');

  // Step 5: Go to checkout
  await cartPage.clickCheckout();

  // Step 6: Enter checkout details
  await checkoutPage.enterCheckoutInformation('Archana', 'P', '75001');

  // Step 7: Complete order
  await checkoutPage.finishOrder();

  // Step 8: Validate order success message
  await checkoutPage.expectOrderSuccess();
});