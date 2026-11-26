import { test, expect } from '@playwright/test';

test('TC-005 - Sort Products A to Z', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="product-sort-container"]').selectOption('az');

  const firstProduct = page.locator('.inventory_item_name').first();

  await expect(firstProduct).toHaveText('Sauce Labs Backpack');
});

test('TC-006 - Sort Products Z to A', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="product-sort-container"]').selectOption('za');

  const firstProduct = page.locator('.inventory_item_name').first();

  await expect(firstProduct).toHaveText('Test.allTheThings() T-Shirt (Red)');
});