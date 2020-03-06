import {FormOnlyState} from '../FormOnlyState';
import {FormStateActions} from '../actions';

const initStore: FormOnlyState = {
  showDeleteButtons: false
};

export default function reducers(state = initStore, action: FormStateActions): FormOnlyState {
  switch (action.type) {
    case 'TOGGLE_DELETE_BUTTONS':
      return {...state, showDeleteButtons: !state.showDeleteButtons};
    default:
      return state;
  }
}
