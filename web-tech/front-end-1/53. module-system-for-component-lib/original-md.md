The best module system for a frontend component library is ESM. It stands for ES Modules. It is the official standard format to package JavaScript and Node.js supports it.

- ESM works in many modern browser (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
- It uses `import` and `export` statement and compiled code has an easy-to-understand syntax.
- Due to ES6's static module structure, it is tree-shakable. This means using a bundler like Rollup can remove unnecessary code.
- You can call it in HTML.

```html
<script type="module">
  ...
</script>
```

- `ESM` is a more secure system than `CJS`. While both `module` and `exports` can be replaced on the fly within the module itself in CJS, this is not possible with ESM because nothing outside the module itself can mutate is own export (https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-module-environment-records).

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

# Reference

**CJS, AMD, UMD, ESM**

Concise and easy: https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm

ESM is the best module format thanks to its simple syntax, async nature, and tree-shakeability.
UMD works everywhere and usually used as a fallback in case ESM does not work
CJS is synchronous and good for back end.
AMD is asynchronous and good for front end.

Detailed one: https://webreflection.medium.com/cjs-vs-esm-5f8b90a4511a#:~:text=The%20biggest%20difference%20between%20CJS,of%20such%20file%20through%20headers.
