# How to fix the error: "Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm."

When I created a lambda function with Typescript and GraphQL support with the apollo-server-lambda module (see the repo <a href="https://github.com/aws-lambda-template-generator/ts-graphql-hello-world" target="_blank">here</a>), I got the error. It took me a while to figure out how to fix it, but finally I did by adding a module to webpack.

The solution for this issue is to add <a href="https://www.npmjs.com/package/webpack-node-externals" target="_blank">Webpack node modules externals</a>. When bundling with Webpack for the backend - you usually don't want to bundle its node_modules dependencies. This library creates an externals function that ignores node_modules when bundling in Webpack.

When I googled this error, there was no good solutions. Error indicate that we need to have the resolve property in package.json and specify the version of the graphql module. But, that didn't help. It really took me a long time to figure this out because I was going down the wrong path. So, I decided to write a post for the other people who have the same issue. There you go, resolving this error is fairy simple!

<b>Error</b>

```
Failure: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
Error: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
```
