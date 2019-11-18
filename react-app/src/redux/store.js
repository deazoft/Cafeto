import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './reducers/user';
import movies from './reducers/movies';
const reducer = combineReducers({
    user,
    movies
});



function logger({ getState }) {
    return (next) => (action) => {
      console.log('dispatch', action)
      let returnValue = next(action)
      console.log('state after dispatch', getState())
      return returnValue
    }
  }

  const store = createStore(reducer,applyMiddleware(logger));

  export default store;