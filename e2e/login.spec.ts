import { Users } from '../test-data/users';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('TC-001 - Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
  Users.standard.username,
  Users.standard.password
);
  await expect(page).toHaveURL(/inventory.html/);

  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});