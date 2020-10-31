/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import CustomTransform from './customTransform'

const persistConfig = {
  key: 'authenticated',
  storage: storage,
  whitelist: ['authentication'],
  transforms: [CustomTransform]
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhacers = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(pReducer, {}, enhacers)
const persistor = persistStore(store);

export default store;
export { persistor };