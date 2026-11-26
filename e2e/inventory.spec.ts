import { test, expect } from '@playwright/test';

test('TC-002 - Verify Products Display', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory.html/);

  const products = page.locator('.inventory_item');
  await expect(products).toHaveCount(6);
});