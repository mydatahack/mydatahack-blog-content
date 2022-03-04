# How to specify which Node version to use in Github Actions

When you want to specify which Node version to use in your Github Actions, you can use <span class="code">actions/setup-node@v2</span>. When you try to use a publicly available node container like <span class="code">node:alpine-xx</span>, the pipeline does not run. It gets stuck in a queue. So, this is pretty much the best way to specify the node version.

<script src="https://gist.github.com/mydatahack/4c550559b338ab7797bb042ca97eadba.js"></script>
