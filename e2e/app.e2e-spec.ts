import { QaHuntPage } from './app.po';

describe('qa-hunt App', function() {
  let page: QaHuntPage;

  beforeEach(() => {
    page = new QaHuntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('qa works!');
  });
});
