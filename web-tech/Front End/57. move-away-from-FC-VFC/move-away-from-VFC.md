# Moving away from FC and VFC

Since the release of React 18, VFC has been deprecated. <span class="code">FunctionalComponent</span> (<span class="code">FC</span>) does not have implicit <span class="code">children</span> any more.

See <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59882" target="_blank">this pull request</a>. It states:

<i>Since the release of the React 18 types we haven't seen any use case for FunctionComponent with implicit children beyond &quot;it breaks existing stuff&quot;.</i>

As React evolves, <a href="https://www.mydatahack.com/using-react-vfc-instead-of-react-fc" target="_blank">using VFC instead of FC</a> is no longer relevant.

Now that we think about it, using <span class="code">FC</span> or <span class="code">VFC</span> was not a good idea from the beginning. Typing the argument instead of typing the function itself is more future-proof because the type of function can change in the React API as it happened for the React 18 update.

We really should be typing the argument for the react component. This means instead of typing the function.

<pre>
const MyComponent: React.VFC<MyComponentProps> = ({
  prop1,
  prop2,
  prop3,
}) => (
  ...
)
</pre>

We should be typing the argument.

<pre>
const MyComponent = ({
  prop1,
  prop2,
  prop3,
  children,
}: MyComponentProps) => (
  ...
)
</pre>
