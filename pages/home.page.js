export class HomePage {
  constructor(page) {
    this.page = page;
    this.mainSection = page.locator('main');
  }

  async goto() {
    await this.page.goto('/');
  }
}