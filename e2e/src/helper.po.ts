import { browser, by, element } from 'protractor';

export class Helper {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  waitForCssClass(elementFinder, desiredClass) {
    return () => elementFinder.getAttribute('class')
      .then(classValue => classValue && classValue.indexOf(desiredClass) >= 0) as Promise<any>;
  }
}
