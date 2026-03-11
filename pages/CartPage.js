class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '#checkout';
  }

  async isProductVisible(productName) {
    return await this.page.locator('.inventory_item_name', { hasText: productName }).isVisible();
  }

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = { CartPage };