import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testbgv.konnectnxt.com/login');
  await page.getByRole('textbox', { name: 'Work Mail*' }).fill('vivek@konnectnxt.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('@Vivek0221');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByText('Something went sideways 😬').click();
});