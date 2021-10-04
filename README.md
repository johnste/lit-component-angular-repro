Example repro using a lit based web component

in development mode `npm start` everything works fine.
when building `npm run build -- --prod` and serving, the web component code is missing

Solved:
The problem turned out to be [@angular-devkit/build-optimizer](https://www.npmjs.com/package/@angular-devkit/build-optimizer) assuming all decorators are side effect free (which lit's isn't, and, assuming neither is Stencil's). See this discussion https://github.com/angular/angular-cli/issues/20714#issuecomment-841255528

Registering the lit component directly (e.g. `customElements.define('simple-component', SimpleComponent);`) works.
