const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('User should see error message for invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});