# What is the best module system for a React component library?

JavaScript module system has been evolving as the language and technology evolves. There are a few different modules systems you can choose when you are bundling a JS library.

The best module system for a frontend component library is <span class="code">ESM</span>. It stands for ES Modules. It is It is the official standard format to package JavaScript (<a href="https://tc39.es/ecma262/#sec-modules" target="_blank">see the language spec</a>). Node.js supports it, too (<a href="https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663#:~:text=js%20Module%20Team.-,Node.,experimental%20and%20subject%20to%20change." target="_blank">see the announcement</a>).

<strong>Because:</strong>

1. <span class="code">ESM</span> works in many modern browser (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank">see browser support</a>).

2. It uses <span class="code">import</span> and <span class="code">export</span> statement and compiled code has an easy-to-understand syntax.

3. Due to ES6's static module structure, you can tree-shake it. This means using a bundler like Rollup can remove unnecessary code.

4. You can call it in HTML with adding <span class="code">type="module"</span> in the script tag.

5. <span class="code">ESM</span> is a more secure system than <span class="code">CJS</span>. While both <span class="code">module</span> and <span class="code">exports</span> can be replaced on the fly within the module itself in <span class="code">CJS</span>, this is not possible with <span class="code">ESM</span> because nothing outside the module itself can mutate is own export (<a href="https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-module-environment-records" target="_blank">by this mechanism</a>).
