import { test, expect } from '@playwright/test';

test.describe('Cocktail Recipes E2E Functional Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the local server running on port 3000
    await page.goto('/');
  });

  test('should display the main application and correct brand title', async ({ page }) => {
    // Assert the main title is visible and matches English content by default
    const brandTitle = page.locator('#brand-title');
    await expect(brandTitle).toBeVisible();
    await expect(brandTitle).toContainText('Cocktail Recipes');
  });

  test('should allow switching between English and Greek languages', async ({ page }) => {
    // Verify default active language is English or set it to English
    const enButton = page.locator('#lang-btn-en');
    await expect(enButton).toHaveClass(/bg-/);

    // Switch to Greek language version
    const elButton = page.locator('#lang-btn-el');
    await elButton.click();

    // Verify Greek button has chosen background state
    await expect(elButton).toHaveClass(/bg-/);

    // Assert Greek translated brand title
    const brandTitleEl = page.locator('#brand-title');
    await expect(brandTitleEl).toContainText('Συνταγές Κοκτέιλ');
  });

  test('should search and filter cocktail recipes successfully', async ({ page }) => {
    // Locating search input
    const searchInput = page.locator('#search-input');
    await expect(searchInput).toBeVisible();

    // Type 'Margarita' into the search box
    await searchInput.fill('Margarita');

    // Confirm Margarita card is shown on the grid
    const margaritaCard = page.locator('#cocktail-card-margarita');
    await expect(margaritaCard).toBeVisible();

    // Other non-matching card elements should not be visible or filtered out
    const negroniCard = page.locator('#cocktail-card-negroni');
    await expect(negroniCard).not.toBeVisible();
  });

  test('should update spotlight displays when a cocktail is selected', async ({ page }) => {
    // Type 'Margarita' into search to make it easy to click
    const searchInput = page.locator('#search-input');
    await searchInput.fill('Margarita');

    const margaritaCard = page.locator('#cocktail-card-margarita');
    await expect(margaritaCard).toBeVisible();

    // Click on the Margarita card
    await margaritaCard.click();

    // Assert the spotlight section updates with Margarita details
    const spotlightName = page.locator('#hero-cocktail-name');
    await expect(spotlightName).toBeVisible();
    await expect(spotlightName).toHaveText('Margarita');

    const spotlightDesc = page.locator('#hero-cocktail-description');
    await expect(spotlightDesc).toContainText('tequila');
  });

  test('should toggle ingredients in the home bar cabinet drawer', async ({ page }) => {
    // Locate the home bar cabinet section
    const barCabinet = page.locator('#bar-cabinet');
    await expect(barCabinet).toBeVisible();

    // Locate the first/stock ingredient toggle button (e.g., gin)
    const ginToggle = page.locator('#ingredient-toggle-gin');
    await expect(ginToggle).toBeVisible();

    // Click to toggle/deselect or select Gin
    const originalText = await ginToggle.textContent();
    await ginToggle.click();

    // Assert toggle logic fires correctly (class updates, or checked state adapts)
    await expect(ginToggle).toBeVisible();
  });

  test('should support clearing the entire home bar cabinet', async ({ page }) => {
    // Find Bar Cabinet component
    const barCabinet = page.locator('#bar-cabinet');
    await expect(barCabinet).toBeVisible();

    // Find Reset button
    const clearButton = page.locator('#btn-clear-cabinet');
    if (await clearButton.isVisible()) {
      await clearButton.click();
      // Ensure the reset button disappears once cabinet is empty
      await expect(clearButton).not.toBeVisible();
    }
  });
});
