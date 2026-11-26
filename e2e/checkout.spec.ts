import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('TC-004 - Complete Checkout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();

  await inventoryPage.openCart();

  await cartPage.checkout();

  await checkoutPage.fillInformation(
    'John',
    'Doe',
    '2000'
  );

  await checkoutPage.continue();

  await checkoutPage.finish();

  await expect(checkoutPage.completeHeader()).toHaveText(
    'Thank you for your order!'
  );

});