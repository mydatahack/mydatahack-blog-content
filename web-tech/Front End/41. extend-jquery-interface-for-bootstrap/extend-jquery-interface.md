# Extending JQuery Interface for Bootstrap support - TypeScript

If you are using TypeScript for Bootstrap, you need to extend the JQuery interface to add Bootstrap methods. For example, if you want to use the tab function from Bootstrap to programmatically trigger bootstrap tab click, the below code will have a type error.

<pre>
$('#mytarget').tab('show');
</pre>

With TypeScript, we can extend the interface by just adding the new types in the custom.d.ts file.
<pre>
interface JQuery {
  tab: (method: string) => void;
}
</pre>

If you are using VS code, the autofix option will add this automatically. It usually adds it with any as default. It is sometimes OK, but if you want to type it, after using the autofix option, you can just edit the file.

