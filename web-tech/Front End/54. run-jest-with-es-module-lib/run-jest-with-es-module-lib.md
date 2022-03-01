# Running Jest when you are importing a file which Jest cannot parse

When you are running jest and encounter the error below, the solution is simple. You need to add <span class="code">transformIgnorePatterns</span> in the jest config. For example, you can simply add this in your <span class="code">package.json</span>.

This is usually caused by using a third party library that uses ES module.

<code>
"jest": {
  "transformIgnorePatterns": [
      "/node_modules/@mdhnpm/(?!react-cube-loading-spinner)"
  ]
},
</code>

The patterns are regex for the module path. You can have super long one to ignore different libraries like <span class="code">"/node_modules/(?!@mdhnpm|react-toastify|react-image-crop|@tippyjs|@brainhubeu|tippy.js)"</span>.

<code>
● Test suite failed to run

Jest encountered an unexpected token

This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

Here's what you can do:
• If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
• To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
• If you need a custom transformation specify a "transform" option in your config.
• If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

You'll find more details and examples of these config options in the docs:
https://jestjs.io/docs/en/configuration.html
</code>
