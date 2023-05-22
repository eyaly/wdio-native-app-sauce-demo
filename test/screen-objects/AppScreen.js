export default class AppScreen {
  
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   */
  async waitForIsShown(isShown = true) {
    try {
      return $(this.selector).waitForDisplayed({
        reverse: !isShown,
      });
    } catch (ign) {
      return !isShown;
    }
  }

  /**
   * Give back if the element is displayed
   *
   * @param {Element} element
   *
   * @return {boolean}
   */
  async isShown(element) {
    // For android an element that is not visible is also not in the UI tree,
    // so a different approach should be used
      const el = element || await $(this.selector);
      return el.isDisplayed();

  }
  
}