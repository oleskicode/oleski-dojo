import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $0.00"
  );
  await page.locator('[data-test="Cafe_Breve"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $15.00"
  );
  await page.locator('[data-test="checkout"]').click();

  // await page.getByRole('button', { name: '×' }).click();
  await page.locator('button[class="close"]').click();

  const checkoutButton = page.locator('[data-test="checkout"]');
  await checkoutButton.hover();

  // await page.getByLabel('Remove one Cafe Breve').click();
  await page.locator('[aria-label="Remove one Cafe Breve"]').click();

  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $14.00"
  );
  await page.locator("li").filter({ hasText: "cart (1)" }).click();
  await expect(page.locator("#app")).toContainText("$14.00 x 1");

  // await page.getByLabel('Remove all Espresso Con Panna').click();
  await page
    .locator(
      'ul[data-v-8965af83] button[aria-label="Remove one Espresso Con Panna"]'
    )
    .click();

  // await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
  await expect(page.locator(".list p")).toContainText(
    "No coffee, go add some."
  );
});
