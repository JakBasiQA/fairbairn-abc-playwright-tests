import { test, expect } from '@playwright/test';

test('API: homepage responds successfully', async ({ request }) => {
  const response = await request.get('/');

  expect(response.status()).toBe(200);
});