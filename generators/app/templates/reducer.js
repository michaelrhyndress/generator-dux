import * as t from './actionTypes';
import State from './model';

const initialState: State = {
	name: ""
};

export default function reducer(state=initialState, action): State {
  switch (action.type) {
    case t.SET_NAME:
		let name = action.payload.trim()
		return {...state, name}
		break;
  	default:
		return state;
  }
};