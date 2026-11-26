import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('TC-005 - Sort Products A to Z', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.sort('az');

  await expect(inventoryPage.firstProduct()).toHaveText('Sauce Labs Backpack');

});

test('TC-006 - Sort Products Z to A', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.sort('za');

  await expect(inventoryPage.firstProduct()).toHaveText('Test.allTheThings() T-Shirt (Red)');

});