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
- Do not overuse headings. In most case, do not need more than h2 rank headings and the occasional h3.


## References

Yale UI is interesting. It has some articles about accessibility and also components library (not React, but just css util classes and js).