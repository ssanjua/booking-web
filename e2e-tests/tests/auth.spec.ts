import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow the user to sign in', async ({ page }) => {
  
  await page.goto(UI_URL)

  // sign in
  await page.getByRole("link", { name: "Sign In"}).click();
  await expect(page.getByRole("heading", { name: "Sign In"})).toBeVisible();
  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password");
  await page.getByRole("button", {name: "login"}).click();
  await expect(page.getByText("Sign in successful")).toBeVisible();
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();
});

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${Math.floor(Math.random() * 90000) + 10000}@test.com`

  await page.goto(UI_URL)

  await page.getByRole("link", { name: "Sign In"}).click();
  await page.getByRole("link", { name: "Create an account here"}).click();
  await expect(page.getByRole("heading", {name: "Create an account"})).toBeVisible();
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=firstName]").fill("test_dos");
  await page.locator("[name=lastName]").fill("test_dosdos");
  await page.locator("[name=password]").fill("password");
  await page.locator("[name=confirmPassword]").fill("password");
  await page.getByRole("button", {name: "Create account"}).click(); 
  await expect(page.getByText("Registration success")).toBeVisible();
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Sign Out"})).toBeVisible();

})
