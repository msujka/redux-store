import React from 'react';
import { createRoot } from 'react-dom/client';
// Import the store here.
import { store } from './app/store.js';

import { App } from './app/App.js';
const root = createRoot(document.getElementById('root'));


// Pass state and dispatch props to the <App /> component.
const render = () => {
  root.render(
    <App 
    state={store.getState()}
    dispatch={store.dispatch}
    />)
};
render();

// Subscribe render to the store.
const unsubscribe = store.subscribe(render);