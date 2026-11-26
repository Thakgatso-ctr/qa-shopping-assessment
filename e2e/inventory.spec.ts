import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('TC-002 - Verify Products Display', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);

  await expect(inventoryPage.products()).toHaveCount(6);

});