import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search (Command+K)').click();
  await page.getByPlaceholder('Search docs').click();
  await page.getByPlaceholder('Search docs').fill('ababababa'); //search with no results
  await expect(page.locator('body')).toContainText('No results for "ababababa"');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await expect(page.getByPlaceholder('Search docs')).toHaveValue('ababababa');
  await page.getByLabel('Clear the query').click();
  await expect(page.getByPlaceholder('Search docs')).toBeEmpty();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.locator('body').press('Escape');
});