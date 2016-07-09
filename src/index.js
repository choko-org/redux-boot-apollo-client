import ApolloClient from 'apollo-client'

export default function createModule(options = {}) {

  const client = new ApolloClient(options)
  const apolloReducer = client.reducer()

  return {
    reducer: (state, action) => ({
      ...state,
      // @TODO: Make the reducer prefix customizable.
      apollo: apolloReducer(state.apollo, action)
    }),
    middleware: client.middleware(),
    enhancer: createStore => (reducer, initialState, enhancer) => ({
      ...createStore(reducer, initialState, enhancer),
      apolloClient: client
    })
  }
}