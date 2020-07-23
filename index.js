import { registerRootComponent } from 'expo';
import React from 'react';

import App from './App';
import { Provider } from 'react-redux';

import UIreducer from './src/store/reducers/UI';
import authAdminReducer from './src/store/reducers/authAdmin';
import cartReducer from './src/store/reducers/cart';
import customerReducer from './src/store/reducers/customer';
import productReducer from './src/store/reducers/products';
import paymentReducer from './src/store/reducers/payment';
import orderReducer from './src/store/reducers/orders';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    UI: UIreducer,
    cart: cartReducer,
    auth: authAdminReducer,
    customer: customerReducer,
    products: productReducer,
    payment: paymentReducer,
    order: orderReducer
  });

  let store = createStore(rootReducer, applyMiddleware(thunk))

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(
    () =>
    <Provider store={store}>
        <App/>
    </Provider>
);
