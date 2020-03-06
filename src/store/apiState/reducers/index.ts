import {ApiState} from '../ApiState';
import {ApiStateActions} from '../actions';
import {DeleteFruitAction} from '../actions/apiStateActions';

function _handleDelete(state: ApiState, action: DeleteFruitAction): ApiState {
  return {
    ...state,
    fruits: state.fruits.filter(name => name !== action.fruitName)
  }
}

const initStore: ApiState = {
  fruits: ['Apples', 'Oranges']
};

export default function reducers(state = initStore, action: ApiStateActions): ApiState {
  switch (action.type) {
    case 'DELETE_FRUIT':
      return _handleDelete(state, action);
    default:
      return state;
  }
}
