# Using Font Files Downloaded From Google Font

When you download a font family from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>, it contains multiple files, each corresponding to a different style. It is common to just import a regular 400 with the font face declaration.

The better practice is to use the method called style linking. In @font-face, we can use the same font-family name for all the styles that you want to use. Then, you set the weight and style for each as the same as the style itself.

<script src="https://gist.github.com/mydatahack/7cfffb9b31512d7c98852bb9efce9f31.js"></script>

```css
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url('./Lato-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url('./Lato-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url('./Lato-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: url('./Lato-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: url('./Lato-BoldItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  src: url('./Lato-Light.ttf') format('truetype');
}
```

CSS will access each font file by matching the style and weight. This is called style linking. The important thing here is that the order of the css properties has to match with the exact same order as in the font-face declaration.

<script src="https://gist.github.com/mydatahack/4afb80380e946a8a6d49cc8976fbdb3e.js"></script>
```scss
.regularText {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
}

.boldText {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
}

.lightText {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
}

.italicText {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
}

.boldItalicText {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
}

.lightItalicText {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
}
```

Font can be confusing because there are a few different ways to achieve this. Style linking is probably the best way because it is supported by most browsers. Generally speaking, the best practice is to have font files for all the weights that you use in your design system and link them by using style linking. Then, each font will use the specific files. Google Font only gives you the truetype format. If you want to support all the browsers, you need to have different file formats, too. If you need further information about the file types, <a href="https://css-tricks.com/snippets/css/using-font-face/" target="_blank">this CSS-Tricks blog</a> is great. 
