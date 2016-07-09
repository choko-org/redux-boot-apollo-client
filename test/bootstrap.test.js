import test from 'tape'
import boot, {BOOT} from 'redux-boot'
import ApolloClient from 'apollo-client'
import createApolloClientModule from '../src'

test('Apollo client reducer', assert => {
  
  const initialState = {}

  // Create the module with no custom options
  // for the Apollo client instance.
  const apolloClientModule = createApolloClientModule()

  const modules = [apolloClientModule]

  const app = boot(initialState, modules)

  app.then(({store, action}) => {

    const currentState = store.getState()
    
    const expectedState = {
      apollo: {
        queries: {},
        mutations: {},
        data: {}
      }
    }

    assert.deepLooseEqual(
      currentState,
      expectedState,
      'Reducers are initiated'
    )

    assert.end()
  })
})

test('Apollo client enhancer', assert => {

  const initialState = {}

  const apolloClientModule = createApolloClientModule()

  const modules = [apolloClientModule]

  const app = boot(initialState, modules)

  const expectedResult = [
    'watchQuery',
    'query',
    'mutate',
    'middleware',
    'setStore',
    'reduxRootKey',
    'initialState',
    'networkInterface',
    'queryTransformer',
    'shouldBatch',
    'shouldForceFetch',
    'dataId',
    'fieldWithArgs',
    'reducerConfig',
    'store',
    'queryManager'
  ]

  app.then(({store, action}) => {

    assert.deepLooseEqual(
      Reflect.ownKeys(store.apolloClient),
      expectedResult,
      'Apollo client instance is present in the store'
    )
  })

  assert.end()
})


