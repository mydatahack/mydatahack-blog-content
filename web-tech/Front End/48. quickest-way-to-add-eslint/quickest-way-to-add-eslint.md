# Quickest Way to Add Eslint to JavaScript and TypeScript Projects

The quickest way to add <span class="code">eslint</span> to your project is using eslint init command. <span class="code">./node_modules/.bin/eslint --init</span> will create <span class="code">eslintrc.js</span> and install dependencies automatically.

<strong>(1) Getting started for JavaScript Application</strong>

It is super simple. Just install eslint, use eslint tool with a init flag and follow the command line instruction.

<pre>
npm i --save-dev eslint
./node_modules/.bin/eslint --init
</pre>

Then, add scripts to package.json.

<pre>
"lint": "./node_modules/.bin/eslint ./",
"lint-fixup": "./node_modules/.bin/eslint ./ --ext .js,.jsx --fix"
</pre>

<strong>(2) Getting started for TypeScript Application</strong>

The same as JavaScript. Note that eslint init will install <span class="code">@typescript-eslint/eslint-plugin @typescript-eslint/parser</pre> when you choose yes to typescript option. However the tool uses npm. If you are using yarn it's better to install it before init.

<pre>
# install dependencies
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Choose TypeScript as an option when we go through the command line tool.
./node_modules/.bin/eslint --init
</pre>

Here is an example of eslintrc.js created by the command-line tool.

<pre>
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
</pre>
