# Using Parcel Bundler for TypeScript React App

Parcel is a relatively new JS bundler that promises zero configuration. I heard a lot of good things about this new bundler. So, I decided to give it a go. Here is the project that I created with Parcel, <a href="https://github.com/mydatahack/javascript-projects/tree/master/Parcel-React-Ts" target="_blank">parcel-ts-react</a>.

In short, Parcel is great for small personal projects. However, it is not as easily customisable as webpack. As it is a new tool, there is not enough documentation available, either. If I'm gonna work on a professional project, I still would go for webpack. It is well-documented, more flexible and you can pretty much cover all the special requirements with all the plugins and Stack Overflow articles. It takes a bit of time writing all the webpack configs, but the time and effort you will spend on getting a workaround for what you want to do with Parcel will take as much if you have special requirements, such as organising the dist folder as mentioned later. 

Here are the technologies I used for the project.

- TypeScript
- React
- SCSS
- Using static assets (e.g. Custom font files)
- CSS Modules

<strong><u>How to setup the project</u></strong>

<strong> 1. Installing Parcel </strong>

Installing Parcel is super easy. All you need to do is add to the dev dependencies.

<pre>
yarn add parcel-bundler --dev
</pre>

<strong> 2. TypeScript Support for React </strong>

TypeScript is supported out of the box. Just install React and TypeScript as you would normally do. All you need to do is to install TypeScript and add a tsconfig.json file.

<pre>
yarn add react react-dom
yarn add typescript @types/react @types/react-dom --dev
</pre>

<pre>
{
  "compilerOptions": {
    "moduleResolution": "node",
    "noImplicitAny": true,
    "strictNullChecks": false,
    "types": ["jest", "node"],
    "outDir": "./dist/",
    "sourceMap": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "resolveJsonModule": true,
    "skipLibCheck" : true,
    "esModuleInterop": true,
  },
  "include" : [ "./src/**/*" ],
  "exclude" : [
      "./src/**/tests/**/*",
      "node_modules"
  ]
}
</pre>

Once TypeScript is configured, all you need to do is to add an entry file (index.html) and add the React entry file in the src, same as JavaScript projects.

Then add start and build scripts. Start script does hot loading. Build creates a dist folder for deployment.

<pre>
"start": "parcel ./src/index.html --open",
"build": "parcel build ./src/index.html"
</pre>

It compiles React code and SASS out of the box.

<strong> 3. Enabling CSS Modules </strong>

CSS modules pretty much work out of the box because Parcel is using postcss-modules. Only one thing you need to do is to create a .postcssrc file and add modules true.

<pre>
{
  "modules": true
}
</pre>

Ah, wait. It is actually not as easy. I had an error that said 'PostCSS plugin postcss-modules requires PostCSS 8 error'. For this error, I first upgraded the parcel to next (v2) and hoped it would fix it. Nah, it didn't. So, I had to downgrade postcss-modules.

<pre>
yarn add parcel@next postcss --dev
yarn add postcss-modules@3.2.2 --dev
</pre>

To generate type files from CSS, I used parcel-plugin-css-modules-type-generator. Once it is installed, it will generate type files for CSS whenever it builds.

<pre>
yarn add parcel-plugin-css-modules-type-generator --dev
</pre>

<strong> 4. Moving Font files </strong>

As long as we have a font face declaration in a css file, it will move the font files to the dist folder.

<strong><u>What is difficult to do.</u></strong>

<strong> 1. Customising the dist folder structure. </strong>

Nah, you cannot do it unless you write a script to change it after the build. All the files are put at the same level as the dist folder.

<strong> 2. Customising the file name. </strong>

Nah, not sure how to do it out of the box unless you write a script. It's probably ok if you just wanna push the entire dist folder to CDN... Only thing you can customise is the entry file name by using the -o option.

Ok, that's pretty much it. All in all, it's a nice tool except I had some trouble to get CSS modules going. For all the other details, see <a href="https://github.com/mydatahack/javascript-projects/tree/master/Parcel-React-Ts" target="_blank">this project</a>. Now you are ready to use Parcel for your next React app!
