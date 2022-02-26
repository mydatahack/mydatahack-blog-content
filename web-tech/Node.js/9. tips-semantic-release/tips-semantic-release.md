# 10 Tips for using Semantic Release

1. Make sure to have the correct <span class="code">name</span> value for the module in <span class="code">package.json</span>. Include a prefix if it is necessary like this, <span class="code">"name": "@mdhnpm/react-cube-loading-spinner"</span>

2. Make sure to add <span class="code">publishConfig</span> in <span class="code">package.json</span>

<pre>
"publishConfig": {
    "registry": "https://registry.npmjs.org/"
},
</pre>

3. Do not set <span class="code">"private": true</span> if you want to publish the module. If private is true, semantic-release will skip publishing.

4. Include metadata like <span class="code">description</span>, <span class="code">keywords</span>, <span class="code">author</span>, <span class="code">license</span> and <span class="code">repository</span>.

5. Use a tool like <span class="code">commitizen</span> to ensure the commit message follows a conventional commit. Use <span class="code">comitlint</span> in CI for the commit message check.

6. If you are publishing to the Npm repository as a public package, add <span class="code">access=public</span> in <span class="code">.npmrc</span>.

7. Make your package lean by adding `.npmignore` to exclude unnecessary files.

8. If you configured it well, all you need to do in CI is to run <span class="code">npx semantic-release</span> (or <span class="code">npx semantic-release --no-ci</span>).

9. If you want to run it as GitHub Action, use the third party semantic-release action like <span class="code">cycjimmy/semantic-release-action@v2</span>.

10. If you are using AWS CodePipeline, don't bother. Nah, kidding. You can still use it. See the blog post, <a href="https://www.mydatahack.com/using-semantic-release-with-aws-codepipeline-and-codebuild/" target="_blank">here</a>

If you want to see the example of using <span class="code">semantic-release</span> to publish the package to both npm repository and Github repository, checkout the setup for this one: <a href="https://github.com/mdhnpm/react-cube-loading-spinner" target="_blank">react-cube-loading-spinner</a>.
