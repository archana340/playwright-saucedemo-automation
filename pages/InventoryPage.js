class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryTitle = '.title';
    this.cartIcon = '.shopping_cart_link';
  }

  async getPageTitle() {
    return await this.page.textContent(this.inventoryTitle);
  }

  async addProductToCart(productName) {
    const productLocator = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    await productLocator.locator('button').click();
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = { InventoryPage };