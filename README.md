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
