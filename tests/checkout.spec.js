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

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();

  await expect(await cartPage.isProductVisible('Sauce Labs Backpack')).toBeTruthy();

  await cartPage.clickCheckout();
  await checkoutPage.enterCheckoutInformation('Archana', 'P', '75001');
  await checkoutPage.finishOrder();

  await expect(await checkoutPage.getSuccessMessage()).toContain('Thank you for your order!');
});