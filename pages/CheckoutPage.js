const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Use Playwright locators (BEST PRACTICE)
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.successMessage = page.locator('.complete-header');
  }

  async enterCheckoutInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);

    await expect(this.continueButton).toBeVisible();
    await this.continueButton.click();
  }

  async finishOrder() {
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
  }

  async expectOrderSuccess() {
    await expect(this.successMessage).toHaveText(/thank you/i);
  }

  async getSuccessMessageText() {
    return await this.successMessage.textContent();
  }
}

module.exports = { CheckoutPage };