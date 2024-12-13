import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.locator('#app')).toContainText('Espresso $10.00');
  await expect(page.locator('#app')).toContainText('Cafe Breve $15.00');
  await page.locator('[data-test="Espresso"]').click();
});