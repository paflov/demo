import { Helper } from './helper.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let helper: Helper;

  beforeEach(() => {
    helper = new Helper();
  });

  it('should login correctly with right credentials', async () => {
    await helper.navigateTo();
    expect(element.all(by.css('#app-workspaces .list-group-item')).count()).toEqual(0);
    await element(by.css('#app-login button')).click();
    await browser.wait(helper.waitForCssClass(element(by.css('#app-login .alert')), 'alert-danger'), 5000);
    expect(element.all(by.css('#app-workspaces .list-group-item')).count()).toEqual(0);
  });

  it('should not login with wrong credentials', async () => {
    await helper.navigateTo();
    expect(element.all(by.css('#app-workspaces .list-group-item')).count()).toEqual(0);
    await element(by.css('#app-login input[name="username"]')).clear();
    await element(by.css('#app-login input[name="username"]')).sendKeys('frankfurt');
    await element(by.css('#app-login input[name="password"]')).clear();
    await element(by.css('#app-login input[name="password"]')).sendKeys('main');
    await element(by.css('#app-login button')).click();
    await browser.wait(helper.waitForCssClass(element(by.css('#app-login .alert')), 'alert-success'), 5000);
    expect(element.all(by.css('#app-workspaces .list-group-item')).count()).toEqual(2);
  });

});
