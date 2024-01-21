module.exports = {
  /**
   * @storybook/addon-ondevice-controls relies on glob-parent insecure dependency
   * for our very simple storybook we don't need these, keep here as reference
   * after editing this, run `yarn storybook-generate` to make the changes effective
   */
  addons: [
    /*'@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'*/
  ],
  stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
};
