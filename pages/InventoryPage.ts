import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  getCartBadge() {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  async sort(option: string) {
    await this.page.locator('[data-test="product-sort-container"]').selectOption(option);
  }

  firstProduct() {
    return this.page.locator('.inventory_item_name').first();
  }

  products() {
    return this.page.locator('.inventory_item');
  }
}