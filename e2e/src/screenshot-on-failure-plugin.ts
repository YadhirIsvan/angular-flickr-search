// tslint:disable: max-line-length
import * as fs from 'fs';
import { browser } from 'protractor';

// Adapted from
// https://github.com/testing-angular-applications/testing-angular-applications/blob/master/chapter10/test_screenshot/screenshot_on_failure_plugin.ts
// MIT-licensed by Craig Nishina
export async function postTest(passed: boolean, testInfo: any): Promise<void> {
  if (!passed) {
    const category = testInfo.category.replace(/ /g, '_');
    const name = testInfo.name.replace(/ /g, '_');
    const fileName = `${category}_${name}_failure.png`;
    const data = await browser.takeScreenshot();
    fs.writeFileSync(fileName, data, 'base64');
  }
}