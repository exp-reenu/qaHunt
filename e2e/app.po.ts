import { browser, element, by } from 'protractor';

export class QaHuntPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('qa-root h1')).getText();
  }
}
