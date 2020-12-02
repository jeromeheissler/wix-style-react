import eyes from 'eyes.it';
import {
  waitForVisibilityOf,
  protractorTestkitFactoryCreator,
} from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../../../test/utils/storybook-helpers';
import { storySettings, testStories } from './storySettings';
import inputDriver from '../../../Input/Input.protractor.driver';

describe('useCopyClipboard', () => {
  const storyUrl = createTestStoryUrl({
    ...storySettings,
    testName: testStories.useCopyClipboard,
  });
  const inputDriverCopy = protractorTestkitFactoryCreator(inputDriver)({
    dataHook: storySettings.dataHookInputCopy,
  });
  const inputDriverPaste = protractorTestkitFactoryCreator(inputDriver)({
    dataHook: storySettings.dataHookInputPaste,
  });

  beforeEach(done => {
    browser.get(storyUrl);
    waitForVisibilityOf(
      [inputDriverCopy.element(), inputDriverPaste.element()],
      'Can not find Input with useCopyClipboard',
    ).then(done);
  });

  eyes.it('should copy text to clipboard', async () => {
    await inputDriverCopy.clickClear('');
    await inputDriverCopy.enterText('https://www.wix.com/about/us');
    await inputDriverCopy.click();
    await inputDriverPaste.click();
    await browser
      .actions()
      .sendKeys(
        protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.INSERT),
      )
      .perform();
    expect(await inputDriverPaste.getText()).toBe(
      'https://www.wix.com/about/us',
    );
  });
});
