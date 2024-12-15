import { test, expect } from '@playwright/test';
// rewrite codegen locators using page.locator("${put css selector here}") and css selectors
test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // await page.getByRole('link', { name: 'Docs' }).click();
  await page.locator('a[class="navbar__item navbar__link"][href="/docs/intro"]').click() 

  // await expect(page.getByRole('article')).toContainText('Playwright Test was created specifically to accommodate the needs of end-to-end testing.');
  await expect(page.locator('#introduction + p')).toContainText('Playwright Test was created specifically to accommodate the needs of end-to-end testing.');

  //await expect(page.locator('code').filter({ hasText: 'npm init playwright@latest' })).toBeVisible();
  await expect(page.locator('code').filter({ hasText: 'npm init playwright@latest' })).toBeVisible();
  
  // await page.locator('code').filter({ hasText: 'npm init playwright@latest' }).click();
  // await page.locator('.tabs > li:nth-child(2)').first().click();
  // await expect(page.locator('code').filter({ hasText: 'yarn create playwright' })).toBeVisible();
  // await page.locator('.tabs > li:nth-child(3)').first().click();
  // await expect(page.locator('code').filter({ hasText: 'pnpm create playwright' })).toBeVisible();
  // await page.locator('.tabs__item').first().click();
  // await expect(page.getByRole('article')).toContainText('npx playwright test');
});
