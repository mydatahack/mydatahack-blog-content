# Using semantic-release with AWS CodePipeline and CodeBuild

Here is the usual pattern of getting the source from a git repository in AWS CodePipeline.

In the pipeline, we use AWS CodeStart to connect to a repo and get the source. Then, we pass it to the other stages, like deploy or publish.

For some unknown reasons, CodePipeline downloads the source as a zip from the repo instead of doing a git clone. This means the resource has no git meta data. Therefore, it doesn't work with semantic-release (which requires it to be run in a git repository).

Hence, you will see this error below if you are trying to run <span class="code">npx semantic-release</span> in a downstream CodeBuild job.

<pre>
The semantic-release command must be executed from a Git repository. 
...
Please verify your CI configuration to make sure the semantic-release command is executed from the root of the cloned repository.
</pre>

The easiest approach is to use git clone in the publish job where you are calling the semantic-release command.

Here is an example that uses Bitbucket. It works with any git repo. By setting the environment variable GIT_CREDENTIALS, the semantic release can also use it for versioning and change-logging.

<pre>
export BITBUCKET_USER=yourusername
export BB_TOKEN=yourpassword
export GIT_CREDENTIALS=$BITBUCKET_USER:$BB_TOKEN
git clone https://$GIT_CREDENTIALS@bitbucket.org/user/repo.git
npx semantic-release --no-ci
</pre>

Alternatively, you can copy and paste <span class="code">.git</span> (the folder containing the git repo metadata) into the source from the early CodePipeline step. That's fine, too.

## REFERENCE

Issue in semantic-release github (https://github.com/semantic-release/semantic-release/issues/870). This one got closed because it's a 3rd party issue.

Then, I found a better one on medium. But, it is a bit complicated. My solution is the simplest, I reckon. https://itnext.io/how-to-access-git-metadata-in-codebuild-when-using-codepipeline-codecommit-ceacf2c5c1dc
