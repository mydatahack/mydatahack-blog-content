# How to set up auto-fix on save by using the project's Eslint config with VS Code

This is a quick instruction to set up auto-fix on save by using the project's eslint config with VS Code. It works for both TS and JS.

1. Install ESLint plugin for VS Code.

2. Add config to VS code

Go to <span class="code">Code</span> -> <span class="code">Preference</span> -> <span class="code">Settings</span> (or press <span class="code">cmd</span> + <span class="code">,</span>).

Search <span class="code">codeActionsOnSave</span>, click <span class="code">edit in settings.json</span> and add the config below.

<pre>
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript"]
</pre>
