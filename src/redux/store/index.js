import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import renderSVG from '../../render/svg/renderSVG';

const store = createStore(
  reducers,
  {},
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  renderSVG();
});

export default store;
