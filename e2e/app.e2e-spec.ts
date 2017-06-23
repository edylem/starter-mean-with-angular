import { StarterMeanWithAngularPage } from './app.po';

describe('starter-mean-with-angular App', () => {
  let page: StarterMeanWithAngularPage;

  beforeEach(() => {
    page = new StarterMeanWithAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
