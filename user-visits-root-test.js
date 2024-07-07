const {assert} = require('chai');

describe('User visits root', () => {
  describe('Posting a quote', () => {
    it('saves quote and metadata submitted by user', () => {
      //Setup - Set up variables to mimic the user's response to each of the input fields
      const quote = "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.";
      const attributed = "Marianne Williamson";
      const source = "A Return to Love: Reflections on the Principles of A Course in Miracles.";
      //Exercise - to set url of test browser to root of project
      browser.url('/');
      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');
      //Verify - to verify that the substring of each of the variables from setup are included in the string 
      assert.include(browser.getText('#quote'), quote);
      assert.include(browser.getText('#attributed'), attributed);
      assert.include(browser.getText('#source'), source);
    })
})
});



