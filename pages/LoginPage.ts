import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly nameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('[href="/login"]');
        this.nameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('input[type="submit"]');
        this.logoutLink = page.locator('[href="/logout"]');
    }

    async open(url: string) {
        await this.page.goto(url);
    }

    async login(name: string, password: string) {
        await this.loginLink.click();
        await this.nameInput.fill(name);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifySuccessfulLogin() {
        await expect(this.logoutLink)
            .toContainText('Logout');
    }
}