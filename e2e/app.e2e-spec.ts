import { Ng2Bug2Page } from './app.po';

describe('ng2-bug2 App', () => {
  let page: Ng2Bug2Page;

  beforeEach(() => {
    page = new Ng2Bug2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
