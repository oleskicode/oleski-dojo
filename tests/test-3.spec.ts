import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $0.00"
  );
  await page.locator('[data-test="Cafe_Latte"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $16.00"
  );
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $30.00"
  );
  await expect(page.locator('[data-test="checkout"]')).toMatchAriaSnapshot(
    `- button "Proceed to checkout"`
  );
});
