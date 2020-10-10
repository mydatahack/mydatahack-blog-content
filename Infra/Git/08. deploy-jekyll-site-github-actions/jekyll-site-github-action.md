# Deploying Jekyll Site to Github Page with Github Actions

I created my personal portfolio site with Jekyll. The site is simply chucked in the Github page. Now, it is time to use Github actions to deploy the site to the Github page repo every time I commit to master.

Here is the code. I am not using the Jekyll actions available out there. Instead, installing Jekyll and build it with commands. It probably takes longer, but this works for me. 

As for the credential to be used in the Github action, we need to create a personal access token (Settingds -> Developer Settings -> Personal access token). Then, add the token to the Jekyll site repo. Then, the action can access to the token as below:

<pre>
with:
  ACCESS_TOKEN: ${{ secrets.GIT_PAGE_DEPLOY }}
  ...
</pre>

That's it. Now every commit to master builds the site and push to Github.io repo.

<script src="https://gist.github.com/mydatahack/2d3ff05aad404434965e35d3b2e7480c.js"></script>