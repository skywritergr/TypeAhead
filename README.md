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

## General assumptions / liberties taken

I could have gone with many libraries both for fuzzy search and for styling. I decided to not do that and keep the size of the module small. I used JavaScript for a very basic implementation of fuzzy search. It's clearly not as sophisticated as it doesn't create scores on which result is more valid that others. Also in very big sets it will obviously won't perform as good.

For styling I decided to use just basic CSS. No preprocessors meant the setup was minimal and quick. No frameworks meant the size was kept small.