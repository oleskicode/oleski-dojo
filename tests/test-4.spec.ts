import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator("#app")).toContainText("cart (0)");
  await page.locator("li").filter({ hasText: "cart (0)" }).click();

  // await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
  await expect(page.locator("p[data-v-8965af83]")).toContainText(
    "No coffee, go add some."
  );

  // await page.getByLabel('Menu page').click();
  await page.locator('[aria-label="Menu page"]').click();

  await page.locator('[data-test="Americano"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $7.00"
  );

  await page.locator("li").filter({ hasText: "cart (" }).click();
  await expect(page.locator("#app")).not.toContainText(
    "No coffee, go add some."
  );
  await page.locator('[aria-label="Menu page"]').click();

  // await page.getByLabel('Cart page').click();
  await page.locator('[aria-label="Cart page"]').click();

  await expect(page.locator("#app")).toContainText("$7.00 x 1");
  await page.locator('[data-test="checkout"]').click();

  // await expect(page.getByRole('heading')).toContainText('Payment details');
  await expect(page.locator("h1[data-v-29c3be1b]")).toContainText(
    "Payment details"
  );
});
