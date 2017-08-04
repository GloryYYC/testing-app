import { TestingAppPage } from './app.po';

describe('testing-app App', () => {
  let page: TestingAppPage;

  beforeEach(() => {
    page = new TestingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
