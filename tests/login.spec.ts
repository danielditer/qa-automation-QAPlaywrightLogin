import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/config';

test.describe('Login Tests', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open(config.baseUrl);
    await loginPage.login(
        config.username,
        config.password
    );
    await loginPage.verifySuccessfulLogin();
  });
});