# How to Raise Good Pull Requests

Throughout my career as a software engineer, I have raised many pull requests. I have raised good ones as well as bad ones. Raising a good pull request is as important as being able to code. Raising a bad pull requests wastes everyone's time and distract team from what is important, delivering quality code. I made so many mistakes and learned a lot of lessons. I decided to write a blog post to distill some of the wisdom on raising a good pull requests. I hope this helps you. 
<p></p>
<h4>(1) Getting your branch ready before raising PR</h4>
<p></p>
<ul>
<li>Run lint and unit tests locally to make sure they pass.</li>
<li>Make sure it passes the branch build.</li>
<li>Install spell checker on your IDE and eliminate as many spelling mistakes as possible.</li>
<li>Make sure to perform squash commits to make the history clean (e.g. three consecutive typo fix commits should be squashed).</li>
<li>Make sure PR is small and easy to review without any unrelated changes.</li>
</ul>
<p></p>
<h4>(2) Adding PR title</h4>
<p></p>
<ul>
<li>The title of PRs should be descriptive and free of references such as card number.</li>
<li>It should be free of acronyms unless you are confident everyone knows what they mean.</li>
<li>Try to start with a verb and read somewhat like a sentence.</li>
</ul>
<p></p>
<h4>(3) Adding PR content</h4>
<p></p>
<ul>
<li>Each platform has a way of making a template. It is a good idea to have template so that all the PR looks similar. </li>
</ul>
<p></p>
<h4>(4) Adding Reviewers</h4>
<p></p>
<ul>
<li>As a rule of thumb, add people(at least 2 reviewers) who know the context (e.g. team member or people who were involved in early design discussions or kick offs). </li>
<li>If you are not sure who to include, ask in the development Slack channel.</li>
</ul>
<p></p>
<h4>Checklist</h4>
<p></p>
This is a quick check list to make your PR ready for review. You can minimise unnecessary update if you go through the checklist before you raise a pull request..
<p></p>
<ol>
<li>Make sure it passes the build step.</li>
<li>Make sure you have spell checker on your IDE and have no spelling mistakes.</li>
<li>Make sure your PR is small and is dealing with one thing, not multiple unrelated changes.</li>
<li>Complete the design discussions with others to minimise the rewrite.</li>
<li>Have unit tests to verify the change.</li>
<li>Make sure to have acceptance test if unit tests do not cover the functionality.</li>
<li>Test it locally according to the acceptance criteria.</li>
</ol>
