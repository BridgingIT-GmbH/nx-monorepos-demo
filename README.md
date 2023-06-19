# Enterjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Migrate to NX Workspace

1. Nx migration schematic
   ```
   npx ng add @nrwl/angular
  
   ```
   2. Install framework specific tools
      ```
      npm i -d @nx/angular
      npm i -d @nx/jest
      npm i -d jest-preset-angular
      ```
      1. delete test target from `/apps/enterjs/project.json`:
         ```
         ,
         "test": {
         "executor": "@angular-devkit/build-angular:karma",
         "options": {
           "polyfills": ["zone.js", "zone.js/testing"],
           "tsConfig": "apps/enterjs/tsconfig.spec.json",
           "inlineStyleLanguage": "scss",
           "assets": ["apps/enterjs/src/favicon.ico", "apps/enterjs/src/assets"],
           "styles": ["apps/enterjs/src/styles.scss"],
           "scripts": []
           }
         }
         ```
      2. create `apps/enterjs/tsconfig.app.json`:
         ```
         {
          "compilerOptions": {
             "target": "es2022",
             "useDefineForClassFields": false,
             "forceConsistentCasingInFileNames": true,
             "strict": true,
             "noImplicitOverride": true,
             "noPropertyAccessFromIndexSignature": true,
             "noImplicitReturns": true,
             "noFallthroughCasesInSwitch": true
          },
          "files": [],
          "include": [],
          "references": [
             {
                "path": "./tsconfig.app.json"
             },
             {
                "path": "./tsconfig.spec.json"
             },
             {
                "path": "./tsconfig.editor.json"
             }
          ],
          "extends": "../../tsconfig.base.json",
          "angularCompilerOptions": {
             "enableI18nLegacyMessageIdFormat": false,
             "strictInjectionParameters": true,
             "strictInputAccessModifiers": true,
             "strictTemplates": true
             }
         }

         ```
      3. run: `nx g @nx/jest:jest-project --project=enterjs`
      3. create `apps/enterjs/src/test-setup.ts`:
         ```
          // @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
          globalThis.ngJest = {
            testEnvironmentOptions: {
              errorOnUnknownElements: true,
              errorOnUnknownProperties: true,
            },
          };
          import 'jest-preset-angular/setup-jest';
         ```
      4. add following properties to `apps/enterjs/jest.config.ts`:
         ```
          setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
          transform: {
             '^.+\\.(ts|mjs|js|html)$': [
                'jest-preset-angular',
                {
                   tsconfig: '<rootDir>/tsconfig.spec.json',
                   stringifyContentPathRegex: '\\.(html|svg)$',
                },
             ],
          },
          transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
          snapshotSerializers: [
             'jest-preset-angular/build/serializers/no-ng-attributes',
             'jest-preset-angular/build/serializers/ng-snapshot',
             'jest-preset-angular/build/serializers/html-comment',
          ],
         ```
3. Tailwind migration
   ```
   nx g @nx/angular:setup-tailwind --project=enterjs
   ```
