const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    // Use Playwright locators instead of plain strings
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
  await this.page.goto('https://www.saucedemo.com/');
}

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    // Add validation before action (reduces flaky tests)
    await expect(this.loginButton).toBeVisible();
    await expect(this.loginButton).toBeEnabled();

    await this.loginButton.click();
  }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async expectLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }

  async getErrorMessageText() {
    return await this.errorMessage.textContent();
  }
}

module.exports = { LoginPage };