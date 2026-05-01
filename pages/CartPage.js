class CartPage {
  constructor(page) {
    this.page = page;

    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async isProductVisible(productName) {
    return await this.page
      .locator('.inventory_item_name', { hasText: productName })
      .isVisible();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}