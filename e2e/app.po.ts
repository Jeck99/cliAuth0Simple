import { browser, by, element } from 'protractor';

export class CliAuth0SimplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
