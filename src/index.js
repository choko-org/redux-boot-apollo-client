import ApolloClient from 'apollo-client'

const client = new ApolloClient()
const apolloReducer = client.reducer()

export default {
  reducer: (state, action) => ({
    ...state,
    apollo: apolloReducer(state.apollo, action)
  }),
  middleware: client.middleware(),
  enhancer: createStore => (reducer, initialState, enhancer) => ({
    ...createStore(reducer, initialState, enhancer),
    apolloClient: client
  })
}