import { test, expect } from "@playwright/test";

test("Main Page - Main Elements", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page.locator("[class='hero__title heroTitle_ohkl']")).toContainText(
    "Playwright enables reliable end-to-end testing for modern web apps."
  );
  
  // await expect(
  //   page.getByRole("img", { name: "Browsers (Chromium, Firefox," })
  // ).toBeVisible();
  await expect(page.locator('main div[style="text-align:center"] img')).toBeVisible();
  
  // await page.getByRole("img", { name: "Browsers (Chromium, Firefox," }).click();
  await page.locator('main div[style="text-align:center"] img').click();

  await expect(page.locator('[aria-label="Search (Command+K)"]')).toMatchAriaSnapshot(
    `- button "Search (Command+K)"`
  );

  // await expect(page.getByRole("main")).toContainText(
  //   "Any browser • Any platform • One API"
  // );
  await expect(page.locator(".row .col h3").first()).toContainText(
    "Any browser • Any platform • One API"
  );
});
