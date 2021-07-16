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
