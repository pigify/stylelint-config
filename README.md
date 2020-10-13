# Pigify stylelint config

## How to install?
```
npm i -D stylelint-config-pigify
or
yarn add -D stylelint-config-pigify
```

## What is it about?
This repo contains our stylelint config file. It should be uses across all new react projects that use css modules to maintain consistent and speed up stylelint configuration. It uses stylelint-config-standard.

## What is happening?
Stylelint configuration with all needed rules is created and placed in the root of your project(`stylelint.config.js`).

## What is next?
1. You have to include stylelint dependencies to your project.
```
npm install --save-dev stylelint stylelint-config-standard stylelint-declaration-block-no-ignored-properties stylelint-declaration-use-variable stylelint-order stylelint-selector-no-empty
```

2. You have to add npm task to start linting.

Example:
```
"stylelint": "stylelint ./'src/theme/**/*.scss' --fix"
```

3. Use it like this:
```
npm run stylelint
or
yarn stylelint
```