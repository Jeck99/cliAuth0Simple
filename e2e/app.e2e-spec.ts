import { CliAuth0SimplePage } from './app.po';

describe('cli-auth0-simple App', () => {
  let page: CliAuth0SimplePage;

  beforeEach(() => {
    page = new CliAuth0SimplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
