# Executing Web Skimmers Inside CSS and SVG files

A web skimmer is a piece of malicious JS code embedded in web payment pages to skim customer’s payment information. There are a few tricks to embed malicious scripts. In this post, we’ll discuss how it can be done in CSS file and SVG file as well as what works and what doesn’t. 

<strong><u>Embedding script in CSS</u></strong>

It is a new and interesting way to inject a script into the page from CSS. We can take advantage of CSS variables. In short, we will have a JS code to pull an external js file as a CSS variable and another small piece of JS to execute this JS code disguised as the variable. Web security tools usually scan JS code, not CSS. This method is more likely to go undetected.

We first define a global CSS variable to create a script tag that pulls the script. Then, you can inject another script to execute the variable through getComputedStyle.

<script src="https://gist.github.com/mydatahack/650e21930e988717b2af0506240e6a48.js"></script>

<strong><u>Embedding script in SVG</u></strong>

This one is a more classic way of embedding a malicious script. SVG is basically XML, which means you can add a script tag and wrap the code with CDATA. You can inject the file to the page through an embed tag. 

Note that this doesn’t work with an img tag, a CSS background-image url or link tag as a favicon. When SVG is used in an image context, the browser emulates a raster image that is not scriptable.

<script src="https://gist.github.com/mydatahack/9aeacda743f5722c8a10689299183ff9.js"></script>

That’s it. If you are interested, I recommend you to try it out by yourself and see how easy it is to hide your script.
