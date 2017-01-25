import { MeanTypescriptStarterPage } from './app.po';

describe('mean-typescript-starter App', function() {
  let page: MeanTypescriptStarterPage;

  beforeEach(() => {
    page = new MeanTypescriptStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
