import { type Page, expect, test } from "@playwright/test";

test.beforeEach(async ({ page }: { page: Page }): Promise<void> => {
  // Adding 60s timeout for the page to load on dev server.
  await page.goto("/", { timeout: 60000 });
});

test.describe("Basic routing", () => {
  test("allows nav from Homepage to Debug page and back", async ({ page }) => {
    // Click on the Debug page link button.
    await page.click('text="Debug"');
    await expect(page).toHaveURL("/debug");

    // Click on the Home page link button.
    await page.click('text="Home"');
    await expect(page).toHaveURL("/");
  });
});
