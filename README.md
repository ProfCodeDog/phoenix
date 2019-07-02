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




ng g m auth
ng g m pages

ng g m @core
ng g m @theme

ng g c auth --m auth
ng g c pages --m pages 

ng g c pages/e-commerce  --m pages 

ng g c pages/miscellaneous/not-found


ng g c @theme/components/header
