# Tips to Be a Good Code Reviewer

Reviewing other people's code is an important skill as a software engineer. Here are some tips to be a good code reviewer. 
<p></p>
<h4>General Rule</h4>
<p></p>
<ol>
<li>Generally speaking, we should prioritise PR over your task if you are assigned as a reviewer. Any lingering pull requests are blockers to the team.
<li>Be explicit about nit (e.g. Nit: variable name might be better with aaaa).
<li>Be explicit about the change suggestion (e.g. if makes it easier for the developer to understand, add the proposed code).
<li>Do not use obscure acronyms.
<li>Make sure to include the detailed reasons for your suggested change.
<li>Make sure to spend time with the reviewee to do pair programming if they are struggling with the change you suggested. Reviewer cannot just throw a comment. They have to take responsibility to help reviewee. I don't want us to make excuse of not finding time. PR should be our priority. I have seen a reviewer just throwing comments and reviewee has no idea about how to change. 
<li>Don't hesitate to ask questions if something is not clear.
</ol>
<p></p>
<h4>What are we looking for?</h4>
<p></p>

<ul>
<li><b>Legibility</b> - Legible code is more reusable, bug-free, and future-proof.</li>
<li><b>Consistency</b> - This makes a code base easier to read and understand, helps prevent bugs, and facilitates collaboration between regular and new/infrequent developers.</li>
<li><b>Code Quality</b> - Improve internal code quality and maintainability (readability, uniformity, understandability)</li>
<li><b>Looking at the requirements</b> - Are all cases fully implemented?*</li>
<li><b>Style guidelines</b> - Does the new code conform to existing guidelines?*</li>
<li><b>Finding defects</b> - Such as performance problems, security vulnerabilities or obvious logic errors in the code?</li>
<li><b>Learning/Knowledge transfer</b> - Help in transferring knowledge about the codebase, solution approaches, expectations regarding quality, etc; both to the reviewers as well as to the author.</li>
<li><b>Mutual Responsibility</b> - Increase a sense of collective code ownership and solidarity.</li>
</ul>

<p></p>
<h4>What are we not looking for?</h4>
<p></p>
<ul>
<li><b>Formatting Suggestions (Linting)</b> - That is the job of the linters. If the linters are not picking up the linting error, consider to update the linting rules.</li>
<li><b>Quibble over details</b> If there is an unresolvable disagreement between reviewer and reviewee just escalate it to (tech lead/ manager).</li>
<li><b>Making it personal</b> - Be professional in your criticism.</li>
<li><b>Vague generalities</b> - Be explicit about your intention.</li>
<li><b>Finding better solutions that change the design completely</b> - Solution design should be completed and thoroughly reviewed prior to development.</li>
</ul>
<p></p>
