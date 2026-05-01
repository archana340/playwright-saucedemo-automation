const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;

    // Stable, readable locators
    this.inventoryTitle = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async expectPageLoaded() {
    await expect(this.inventoryTitle).toHaveText('Products');
  }

  async getPageTitle() {
    return await this.inventoryTitle.textContent();
  }

  async addProductToCart(productName) {
    // Find specific product using text filter (dynamic locator)
    const product = this.inventoryItems.filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    const addToCartButton = product.getByRole('button', { name: 'Add to cart' });
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
  }

  async openCart() {
    await expect(this.cartIcon).toBeVisible();
    await this.cartIcon.click();
  }
}

module.exports = { InventoryPage };