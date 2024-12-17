import { test, expect } from "@playwright/test";

test("Docs Page - Check Some Elements", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Docs" }).click();
  await expect(page.getByRole("article")).toContainText(
    "Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari."
  );
  await expect(
    page.locator("code").filter({ hasText: "npm init playwright@latest" })
  ).toBeVisible();
  await page
    .locator("code")
    .filter({ hasText: "npm init playwright@latest" })
    .click();
  await page.locator(".tabs > li:nth-child(2)").first().click();
  await expect(
    page.locator("code").filter({ hasText: "yarn create playwright" })
  ).toBeVisible();
  await page.locator(".tabs > li:nth-child(3)").first().click();
  await expect(
    page.locator("code").filter({ hasText: "pnpm create playwright" })
  ).toBeVisible();
  await page.locator(".tabs__item").first().click();
  await expect(page.getByRole("article")).toContainText("npx playwright test");
});
