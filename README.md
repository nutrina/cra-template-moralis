# cra-template-moralis

This is a modified version of the [cra-template-redux](https://github.com/reduxjs/cra-template-redux) template, that adds [Moralis](https://moralis.io) to the generated project. 

To create a project run:
```sh
npx create-react-app my-app --template cra-template-moralis
cd my-app
cp .env.sample .env.local
```
Edit the file `.env.local` and fill in the app ID and server url after you create a [Moralis Server Instance](https://docs.moralis.io/moralis-server/getting-started/quick-start).
Now start your app with:
``` sh
yarn start
```

## Usage

To use this template within your project, add `--template cra-template-moralis` when creating a new app.

For example:

```sh
npx create-react-app my-app --template cra-template-moralis

# or

yarn create react-app my-app --template cra-template-moralis
```


Cloning this repo pulls down the Redux template only; not a bundled and configured Create React App.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
