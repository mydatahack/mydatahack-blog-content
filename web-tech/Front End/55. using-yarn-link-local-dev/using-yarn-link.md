# Using yarn link to develop React library locally

When you develop a react library locally, you can use <span class="code">yarn link</span> to link the repo for the react module to the react app. In this way, the react app will use the local version of the module.

1. Go to the module source repo.

<code>
yarn link
</code>

2. Go to the repo that uses the module

<code>
yarn link <the name of the module from the output above>
</code>

Now you can start using the library by just importing.

Yep, it's easy.

But... there is a catch.

Now, you'll get this error message.

<pre>
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
</pre>

To fix this, you need to delete <span class="code">node_modules</span>, move <span class="code">react</span> and <span class="code">react-dom</span> to <span class="code">peerDependencies</span> and the re-install all the dependencies.

It's a bit of effort, but it works now!
