import { test, expect } from "@playwright/test";

test("Main Page - Main Elements", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page.locator("h1")).toContainText(
    "Playwright enables reliable end-to-end testing for modern web apps."
  );
  await expect(
    page.getByRole("img", { name: "Browsers (Chromium, Firefox," })
  ).toBeVisible();
  await page.getByRole("img", { name: "Browsers (Chromium, Firefox," }).click();
  await expect(
    page.getByRole("img", { name: "Browsers (Chromium, Firefox," })
  ).toBeVisible();
  await page.getByRole("img", { name: "Browsers (Chromium, Firefox," }).click();
  await expect(page.getByLabel("Search (Command+K)")).toMatchAriaSnapshot(
    `- button "Search (Command+K)"`
  );
  await expect(page.getByRole("main")).toContainText(
    "Any browser • Any platform • One API"
  );
});
