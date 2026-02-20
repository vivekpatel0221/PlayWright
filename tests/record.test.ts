import { test, expect, devices } from '@playwright/test';
import path from 'path';


test('Recruiter can initiate single background verification successfully', async ({ page }) => {
   test.setTimeout(60000);
  await page.goto('https://testbgv.konnectnxt.com/login');
  await page.getByPlaceholder('admin@konnectnxt.com').fill('vivek@konnectnxt.com');
  await page.getByPlaceholder('At least 8 characters, e.g., AbC@ssw0rd').fill('@Vivek0221');
  await page.getByRole('button',{name:'LOGIN'}).click();
  await page.getByRole('button',{name:'Start New Verification'}).click();
  await page.getByRole('heading',{name:"I'll provide the details"}).click();
  await page.getByRole('button',{name: 'Confirm & Continue'}).click();
  await page.getByRole('heading',{name:'Single Verification'}).click();
await page.getByPlaceholder('Harsh Jain').fill('Nallala Vivek Patel');
await page.getByPlaceholder('example@gmail.com').fill('vivekpatel02221@gmail.com');
await page.getByPlaceholder('9874561230').fill('+91 84658 90221');
 
  const  filePath = path.resolve(
    __dirname,
    'test-data',
    'Diivyaa Paul (3).pdf'
  );

  console.log('Uploading file from:', filePath);

  await page.locator('input[type="file"]').setInputFiles(filePath);
  await expect(
  page.getByText('Diivyaa Paul (3).pdf')
).toBeVisible();
  
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('tab', { name: 'Individual Checks' }).click();
  await page.getByRole('checkbox', { name: 'PAN' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect(
  page.getByText('Background Verification Initiated Successfully!')
).toBeVisible();







});