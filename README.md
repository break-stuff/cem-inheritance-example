# CEM Inheritance Example

This repo is to demonstrate the abilities of the [Custom Elements Manifest Inheritance](https://www.npmjs.com/package/custom-elements-manifest-inheritance) package.

This example extends the [Shoelace Input element](https://shoelace.style/components/input/) in the `MyInput` component and the extends it again in `MyExtComponent`. In the [custom-elements.json](./custom-elements.json) file, you will see the inherited attributes, properties, methods, CSS custom properties, CSS parts, slots, and events.

## Running the Code

```bash
# install dependencies
npm install

# run the analyzer
npm run analyze
```