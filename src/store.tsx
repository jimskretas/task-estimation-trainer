import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const thunkMiddleware = require('redux-thunk').default;

export default function configureStore() {
  const composeEnhancers = composeWithDevTools({ trace: true });
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );

  return store;
}
