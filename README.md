# Redux Boot module: Apollo Client.

[![Build Status](https://travis-ci.org/choko-org/redux-boot-apollo-client.svg?branch=master)](https://travis-ci.org/choko-org/redux-boot-apollo-client)

Redux Boot module to use the [Apollo Client](https://github.com/apollostack/apollo-client).

## Install
```bash
npm install redux-boot-apollo-client --save
```

## Usage

```js
import boot from 'redux-boot'
import apolloClientModule from 'redux-boot-apollo-client'

import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

// React container of the App.
import App from './containers/App'

const initialState = {}

const modules = [apolloClientModule]

const app = boot(initialState, modules)

app.then(({store, action}) => {
  
  // Render your App with the Apollo provider.
  render(
    <ApolloProvider store={store} client={store.apolloClient}>
      <App />
    </ApolloProvider>,
    document.getElementById('content')
  )
})

```
