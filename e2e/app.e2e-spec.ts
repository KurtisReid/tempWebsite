import { WebsiteBarPage } from './app.po';

describe('website-bar App', () => {
  let page: WebsiteBarPage;

  beforeEach(() => {
    page = new WebsiteBarPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
