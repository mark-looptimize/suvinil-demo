# \<suvinil-hero>

This repository is an example of how we could code and deliver an experiment. It is designed to easily fit in with existing developer workflows.

## Installation

```bash
npm i suvinil-hero
```

## Usage

```html
<script type="module">
  import 'suvinil-hero/hero-component.js';
</script>

<suvinil-hero></suvinil-hero>
```

## Linting and formatting

To scan the project for linting and formatting errors, run the following command:

```bash
npm run lint
```

To automatically fix linting and formatting errors, run the following command:

```bash
npm run format
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
