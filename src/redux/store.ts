import { createStore, combineReducers } from 'redux';
import { formReducer, FormState } from './reducers';

interface RootState {
  form: FormState;
}

const rootReducer = combineReducers<RootState>({
  form: formReducer(undefined, { type: '@@INIT' }), // Pass undefined and an initial action to the formReducer
});

const store = createStore(rootReducer);

export default store;