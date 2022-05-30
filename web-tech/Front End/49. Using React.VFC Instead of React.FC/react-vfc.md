# Using React.VFC Instead of React.FC

When we Type React functional components, it is better to use <span class="code">React.VoidFunctionComponent (React.VFC)</span> instead of <span class="code">React.FC</span>. <span class="code">React.FC</span> always includes the children prop on your component whether you want or not. We can get around this by adding <span class="code">children?: never</span> on your custom prop. However, it is much cleaner to use <span class="code">React.VFC</span> and type children explicitly.

If you are using old react type, you might need to upgrade <span class="code">@types/react</span> to <span class="code">^16.9.53</span>. Note that <span class="code">React.VFC</span> was introduced in <span class="code">@types/react@16.9.48</span>.

If you have type conflicts caused by different version dependencies in old packages, we can always add resolutions to package.json.

<pre>
"resolutions": {
  "react": "16.13.1",
  "@types/react": "^16.9.53",
  "graphql": "^15.5.1"
},
</pre>

See further information on <span class="code">React.VFC</span> <a href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/" target="_blank">here</a>.

<p style="color:#dd3333"><strong>UPDATE</strong></p>

Since the release of React 18, <span class="code">React.FC</span> no longer includes implicit children and <span class="code">React.VFC</span> is deprecated. We should move away from them (<a href="https://www.mydatahack.com/moving-away-from-fc-and-vfc" target="_blank">Moving away from React.FC and React.VFC</a>).
