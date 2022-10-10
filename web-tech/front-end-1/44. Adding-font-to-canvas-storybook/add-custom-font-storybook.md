# Adding Custom Font to Storybook

Most of the design systems have custom fonts. Let's see how we can bring them to Storybook. Once the font is in, we can start using it in canvas by adding CSS. My example storybook repo is <a href="https://github.com/mydatahack/mdh-design-system-storybook-typescript" target="_blank">here</a>.

First of all, we need to add a font folder and add all the font files as well as the css file with font-face declarations.

Then, we need to move this folder into the storybook-static folder (where the built artifacts go). In order to do this, we can write a custom webpack config file and add it.storybook folder. We use copy-webpack-plugin to move static assets here. This custom webpack.config.js file will be called during storybook build. Make sure that you have the correct input and output path.

Once this is added, you can see the font folder appearing in the storybook-static folder after successful build.

<script src="https://gist.github.com/mydatahack/d9b49baa32df2de8506a0ff7cd6e63c7.js"></script>

```javascript
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = async ({ config }) => {
  // fonts
  config.plugins.push(
    new CopyWebpackPlugin({patterns: [
      { 
        from: path.resolve(__dirname, '../src/fonts/Lato'),
        to: 'fonts/Lato' 
      },
    ]}),
  );

  return config;
};
```

To use font in the Canvas, we need to add font to preview-head.html. Canvas is an iframe which can be customised by editing the files prefixed as preview-* (preview-head.html, preview-body.html, preview.js and so on). In this case, we add a custom style, in preview-head.html as below. If the component is already using the same font family, adding @font-face will enable font for that component. Alternatively, we can create a class to access the font and add the class to html elements.

<script src="https://gist.github.com/mydatahack/7c62860903e2795fdf0305597ade46c0.js"></script>

```html
<style>
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/Lato/Lato-Regular.ttf') format('truetype');
}

.custom-font {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
}
</style>
```
