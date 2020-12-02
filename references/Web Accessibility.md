# Web Accessibility

This is a reference for web accessibility.

## (1) heading

1. Page must have h1 element (https://usability.yale.edu/web-accessibility/articles/headings)

- h1 provides an important navigation point for users.
- At least have a h1 level heading giving the title of the page.
- Most screen reader users prefer than only the document title to be h1.
- It does not need to be the first heading of the page because it is normal to use headings for repeated blocks of information that occur before the document title such as menus or sidebars.
- Headings should not be used as subheadings, subtitles, alternative titles, taglines, or slogans. In such cases, it is best to use a p tag.
- It is generally inappropriate to use headings within tables, such as th element. Tables can be given an accessible name using a caption element or by using an ARIA label.

2. Use heading hierarchically

- Do not use bold instead of heading
- Do not overuse headings. In most case, 

## (2) Bold and Italic tags

The bold tag `<b>` and the italic tag `<i>` are listed as a WCAG Level A error because most screen reader will not announce these changes to the screen reader user. They should not be used to style text when the author wants to emphasize a word or passage of text.

Instead use the strong tag `<strong>` and the emphasis tag `<em>`. They are considered Semantic Markup that adds meaning to the content. Screen reader will understand these tags. Having said that, most screen readers will ignore them. The voice will not be raised because of these tags for the most of screen readers.

See this reference (https://support.siteimprove.com/hc/en-gb/articles/115002726312-Accessibility-Bold-vs-Strong-and-Italic-vs-Emphasis)

What about nesting these?

Acceptable nesting

```html
<p>This is Paragraph speaking, <em>Hello world, it is <strong>me</strong><em></p>
```

This one doesn't really make sense because strong overrides em.

```html
<p><em><strong>Hello world</strong><em></p>
```

## (3) Span

`<span>` is a generic inline container for phrasing content. It is only used for styling purposes. It should be used only no other semantic element is appropriate. It is like a `<div>`. 


## References

Yale UI is interesting. It has some articles about accessibility and also components library (not React, but just css util classes and js).
