import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByLabel("Search (Command+K)").click();
  await page.getByPlaceholder("Search docs").click();
  await page.getByPlaceholder("Search docs").fill("locators");
  await page.getByRole("link", { name: "Locator operators​ Locators" }).click();
  await expect(page.getByRole("article")).toContainText(
    "You can chain methods that create a locator, like page.getByText() or locator.getByRole(), to narrow down the search to a particular part of the page."
  );
  await expect(
    page.getByRole("heading", { name: "Matching inside a" })
  ).toBeVisible();
  await expect(page.locator("#get-a-specific-item")).toMatchAriaSnapshot(`
    - heading "Get a specific itemDirect link to Get a specific item" [level=3]:
      - link "Direct link to Get a specific item"
    `);
});
