# Using this project

## Basic setup

* Clone the repo
* <Optional> Go into the TypeAhead folder and do `yarn && yarn build`
* Go into `Sesame` folder and do `yarn` there. 
* Navigate into `localhost:3000` and use the input document there.

## Testing

The `Sesame` folder is just a basic `create-react-app` project without any logic. It's only for quick demo purposes. As such no tests are written for it.

The `TypeAhead` part of this repo though has tests that can be run by doing `yarn test`

## How to use the component outside of this project

The `TypeAhead` package exports the `<TypeAhead />` component that can be dropped in any form like an normal input component. A user can either select one of the suggestions or add their own text.

## Technologies

I used `TypeScript`, `React`, `Jest`, `React-testing-library` and used `yarn` for the most part as the package manager.