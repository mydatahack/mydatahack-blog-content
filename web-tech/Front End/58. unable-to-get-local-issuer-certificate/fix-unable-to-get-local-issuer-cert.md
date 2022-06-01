If you are having
<span class="code">unable to get local issuer certificate</span> error with <span class="code">yarn install</span> from a private npm repository (such as JFrog), you can try running this command:

<pre>
yarn config set "strict-ssl" false
yarn install
</pre>

<strong>Error message example</strong>

error An unexpected error occurred: "https://npco.jfrog.io/artifactory/api/npm/npm-mdh/@mdh/my-library/-/@mdh/my-library-3.21.0.tgz: unable to get local issuer certificate".
