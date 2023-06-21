# Enterjs

## Migrate to NX Workspace

1. Nx migration schematic
   ```
   npx ng add @nx/angular
  
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

4. create `apps/enterjs/src/test-setup.ts`:
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

5. add following properties to `apps/enterjs/jest.config.ts`:
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
## Split Project into Feature Libraries

### Auth Lib
Execute the generator script and delete generated component. After that make sure you export all public resources:
```bash
libName="auth" ;
libPath="apps/enterjs/src/app/$libName";
nx g @nx/angular:library chirper/$libName --standalone --tags=feature --importPath=@chirper/$libName && \
rm -rf libs/chirper/$libName/src/lib/chirper-$libName && \
mv $libPath/*  libs/chirper/$libName/src/lib/ && && rm -rf $libPath \
echo "export * from \"./lib\"" > libs/chirper/$libName/src/index.ts;
```

### Chirp Lib
Execute the generator script and delete generated component. After that make sure you export all public resources:
```bash
libName="chirp" ;
libPath="apps/enterjs/src/app/$libName";
nx g @nx/angular:library chirper/$libName --standalone --tags=feature --importPath=@chirper/$libName && \
rm -rf libs/chirper/$libName/src/lib/chirper-$libName && \
mv $libPath/*  libs/chirper/$libName/src/lib/ && rm -rf $libPath && \
echo "export * from \"./lib\"" > libs/chirper/$libName/src/index.ts;
```

### Home Lib
Execute the generator script and delete generated component. After that make sure you export all public resources:
```bash
libName="home" ;
libPath="apps/enterjs/src/app/$libName";
nx g @nx/angular:library chirper/$libName --standalone --tags=feature --importPath=@chirper/$libName && \
rm -rf libs/chirper/$libName/src/lib/chirper-$libName && \
mv $libPath/*  libs/chirper/$libName/src/lib/ && rm -rf $libPath && \
echo "export * from \"./lib\"" > libs/chirper/$libName/src/index.ts;
```

### Profile Lib
Execute the generator script and delete generated component. After that make sure you export all public resources:
```bash
libName="profile" ;
libPath="apps/enterjs/src/app/$libName";
nx g @nx/angular:library chirper/$libName --standalone --tags=feature --importPath=@chirper/$libName && \
rm -rf libs/chirper/$libName/src/lib/chirper-$libName && \
mv $libPath/*  libs/chirper/$libName/src/lib/ && rm -rf $libPath && \
echo "export * from \"./lib\"" > libs/chirper/$libName/src/index.ts;
```

### User Lib
Execute the generator script and delete generated component. After that make sure you export all public resources:
```bash
libName="user" ;
libPath="apps/enterjs/src/app/$libName";
nx g @nx/angular:library chirper/$libName --standalone --tags=feature --importPath=@chirper/$libName && \
rm -rf libs/chirper/$libName/src/lib/chirper-$libName && \
mv $libPath/*  libs/chirper/$libName/src/lib/ && rm -rf $libPath && \
echo "export * from \"./lib\"" > libs/chirper/$libName/src/index.ts;
```



### Shared Lib
Execute the generator script and delete generated component. After that make sure you export all public resources:
```bash
libName="shared" ;
libPath="apps/enterjs/src/app/$libName";
nx g @nx/angular:library chirper/$libName --standalone --tags=feature --importPath=@chirper/$libName && \
rm -rf libs/chirper/$libName/src/lib/chirper-$libName && \
mv $libPath/*  libs/chirper/$libName/src/lib/ && rm -rf $libPath && \
echo "export * from \"./lib\"" > libs/chirper/$libName/src/index.ts;
```
