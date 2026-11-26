import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('TC-003 - Add Product to Cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.getCartBadge()).toHaveText('1');

  await inventoryPage.openCart();

  await expect(page).toHaveURL(/cart.html/);

  await expect(cartPage.cartItems()).toHaveCount(1);

});