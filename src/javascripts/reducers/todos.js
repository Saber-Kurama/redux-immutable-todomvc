// import assign from 'object-assign';
import { createReducer } from 'utils';
import { TODO_CREATE, TODO_TOGGLE_COMPLETE_ALL, TODO_COMPLETE } from 'constants/todos';
import Immutable from 'immutable';

const initialState = Immutable.fromJS([{id: '001', text: 'saber', complete: false}]);

export default createReducer(initialState, {
  [TODO_CREATE]: (state, payload) => {
    console.log(payload);
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const todo = Immutable.fromJS({id: id, text: payload, complete: false});
    return payload ? state.unshift(todo) : state;
  },
  [TODO_TOGGLE_COMPLETE_ALL]: () => {
    return initialState;
  },
  [TODO_COMPLETE]: (state, payload) => {
    const todoindex = state.findIndex((value) => {
      if (Immutable.is(payload, value)) {
        return true;
      }
      return false;
    }, {});
    console.log(todoindex);
    const newstate = state.set(todoindex, state.get(todoindex).merge({complete: true}));
    return Immutable.is(newstate, state) ? state : newstate;
  },
});
