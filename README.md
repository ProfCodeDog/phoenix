# Phoenix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



https://akveo.github.io/nebular/docs/guides/install-nebular#manually


ng new phoenix
ng add @nebular/theme

npm install --save @nebular/theme 
npm install --save @angular/cdk 
npm install --save @angular/animations
npm install --save @nebular/eva-icons@next
npm install --save @nebular/bootstrap
npm install --save @ng-bootstrap/ng-bootstrap


npm install bootstrap
npm install protractor
npm install typeface-exo
npm install roboto-fontface
npm install ionicons
npm install @fortawesome/fontawesome-free
npm install socicon
npm install nebular-icons
npm install angular-tree-component
npm install leaflet
npm install font-awesome


npm install pace-js
npm install tinymce
npm install echarts
npm install chart.js
     



ng g m auth
ng g m pages
ng g m pages/e-commerce 

ng g m @core
ng g m @theme


ng g s @core/utils/state
ng g s @core/utils/analytics
ng g s @core/utils/layout

ng g s @theme/services/window-mode-block-scroll


ng g c auth --m auth
ng g c pages --m pages 


ng g c pages/e-commerce  --m pages 

ng g c pages/miscellaneous/not-found


ng g c @theme/components/header
ng g c @theme/components/footer



ng g c @theme/layouts/one-column
ng g c @theme/layouts/two-column
ng g c @theme/layouts/three-column
