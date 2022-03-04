# How to specify which Node version to use in Github Actions

When you want to specify which Node version to use in your Github Actions, you can use <span class="code">actions/setup-node@v2</span>.

When you try to use a publicly available node container like <span class="code">runs-on: node:alpine-xx</span>, the pipeline gets stuck in a queue. <span class="code">runs-on</span> is not for a container name. It's for a virtual machine hosted by GitHub and the best option for a Linux machine at the moment is <span class="code">ubuntu-latest</span>.

In fact, GitHub supports runners for Ubuntu Linux (<span class="code">ubuntu-latest</span>), Mac (<span class="code">mac-latest</span>) and Windows (<span class="code">windows-latest</span>). You can see other supported virtual environments <a href="https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners" target="_blank">here</a>.

<script src="https://gist.github.com/mydatahack/4c550559b338ab7797bb042ca97eadba.js"></script>
