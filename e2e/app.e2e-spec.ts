import { AlgamoneyUiPage } from './app.po';

describe('single-app App', () => {
  let page: AlgamoneyUiPage;

  beforeEach(() => {
    page = new AlgamoneyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
