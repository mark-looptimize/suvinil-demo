This is a Next.js v12.5.1 project bootstrapped with [`create-next-app`] that is designed to demonstrate how to easily integrate our code within your own project.

## Getting Started

First, run the development server:

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Introduction

We created this demo around a somewhat hypothetical but otherwise very realistic scenario where we wished to conduct an A/B test **for desktop users only** on https://www.suvinil.com.br/ where we replaced the following the top part of the page as shown below:

### Original

![Build Output](/docs/homepage-original.png)

### Experiment Variant

![Build Output](/docs/homepage-variant.png)

We wanted to establish some patterns that would allow us to integrate easily with your existing workflows and technology stack while also minimising the chance of introducing any new issues at the same time.

## Our Approach

We have entirely isolated our code from your existing project by creating a private NPM package that allows us to take advantage of our own tooling, methodologies and workflows while still allowing you to use the exact same approach you are already using for working with 3rd party code (i.e. `npm install <package-name>`).

From there we created a new Next.js project using the exact same version as the one you are already running and produced a minimal example to highlight how our code might be used in a real scenario. We believe that this way allows us to have a more productive conversation regarding any questions or concerns you may have and allow us to resolve them as early in the process as possible.

## Repository Structure

The root directory is the result of creating a brand new Next application by running `npx create-next-app@12.1.5` with all of the regular boilerplate code removed to keep the demo focused.

### next.config.js

As covered in the questions section below there is a tiny amount of work (just 3 lines of code) required that allows our solution to work smoothly with both React and Next.js you can see what that looks like in this file.

### pages/index.js

This file demonstrates how our code would be integrated as a part of a normal Next.js page file

### package.json

You can see here that we have included 1 additional package here `@lit-labs/nextjs` which is what we used in the `next.config.js` file. You will also see a reference to a [workspace](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) which is what allowed us in this demo to take advantage of a local NPM package without needing a registry. This is just a reference to where **our** code lives.

### packages/suvinil-hero

Here you are able to find all of our code, toolchains etc which is mostly just for transparency purposes. In practice you are able to treat it like any other npm package without having to worry about how it was implemented or built. We have implemented the variant code using the Web Components standard for reasons covered below. 

## Questions

### Why use Web Components and not React?

As an agency who has to work with a large number of clients across a wide variety of technology stacks we needed to find a solution which works equally well for everybody regardless of what frameworks they are using. 
The only realistic option to deliver that goal for us is to take advantage of the browser's native component model (i.e. Web Components) which allows each framework to work with it the same as any other standard HTML element. As you can see on the website [Custom Elements Everywhere](https://custom-elements-everywhere.com/) almost every framework provides excellent interoperability with this approach out of the box without any additional work. However, as you may see from that website React is currently the one main exception to this rule. Until this is resolved with the upcoming release of React v19 we need to __wrap__ the component with a small amount of interop glue code. This is handled automatically for us through the use of the `@lit-labs/nextjs` package.

### Does this work with server side rendering?

Yes! This is also handled for us automatically via the `@lit-labs/nextjs` package which hooks into Next's build pipeline to take care of this for us without any additional work.

### How do we actually test this in our own codebase?

Take a look at the README for `@lit-labs/nextjs` [here](https://github.com/lit/lit/tree/main/packages/labs/nextjs) for more detailed instructions but it is very simple. Simply install the package as a dependency and edit your `next.config.js` file like we have done in this project. Once you have done that you can import the web component and use it as though it was plain HTML code as shown in `pages/index.js`

### Will this impact our performance?

Almost certainly not. We also chose this approach with our clients precisely because it was extremely fast and lightweight in addition to the interoperability benefits. As you can see in the screenshot below the total filesize is barely 5kb which includes:
- The component code (i.e. all of the HTML / CSS / JS)
- The React compatability layer
- A [micro library from Google](https://lit.dev) that provides a React like development experience on top of plain Web Components
- Cross browser compatability to ensure Web Components work well for all users
![Build Output](/docs/code-size.png)

## Issues

We observed in our own testing that due to how __live reload__ works in the Next.js __development mode__ (i.e. when running `npm run dev`) that we would __occassionally__ see an error that looks like the following:

```bash
Error: Failed to execute 'define' on 'CustomElementRegistry': the name "suvinil-hero" has already been used with this registry
    at CustomElementRegistry.define (file:///home/looptimize/Code/suvinil/suvinil-hero/node_modules/@lit-labs/ssr-dom-shim/index.js:90:19)
    at file:///home/looptimize/Code/suvinil/suvinil-hero/node_modules/@lit/reactive-element/node/decorators/custom-element.js:6:60
    at file:///home/looptimize/Code/suvinil/suvinil-hero/node_modules/@lit/reactive-element/node/decorators/custom-element.js:6:75
    at __decorate (/home/looptimize/Code/suvinil/suvinil-hero/node_modules/tslib/tslib.js:104:99)
    at eval (webpack-internal:///./packages/suvinil-hero/dist/src/hero-component.js:64:64) {
  page: '/'
}
```
If you run into a similar scenario you can fix this simply by restarting the dev server.