const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItems = page.locator('.inventory_item_name');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  // ✅ FIXED method (matches your test)
  async expectProductVisible(productName) {
    await expect(this.cartItems.filter({ hasText: productName })).toBeVisible();
  }

  async clickCheckout() {
    await expect(this.checkoutButton).toBeVisible();
    await expect(this.checkoutButton).toBeEnabled();
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };