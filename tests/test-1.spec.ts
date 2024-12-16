import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  // await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');

  await page.locator('[data-test="Cafe_Breve"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $15.00');
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $29.00');
  // hover over Total price
  const checkoutButton = page.locator('[data-test="checkout"]')
  await checkoutButton.hover();

  // await page.getByLabel('Remove one Espresso Con Panna').click();
  await page.locator('[aria-label="Remove one Espresso Con Panna"]').click();

  // await page.getByLabel('Remove one Cafe Breve').click();
  await page.locator('[aria-label="Remove one Cafe Breve"]').click();
  
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});