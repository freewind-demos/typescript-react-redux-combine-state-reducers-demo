import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {ApplicationActions, ApplicationState} from '../store/application';
import {deleteFruitAction} from '../store/apiState/actions/apiStateActions';
import {toggleDeleteButtons} from '../store/formOnlyState/actions/actionTypes';

type StateProps = {
  showDeleteButtons?: boolean,
  fruits: string[]
}

type DispatchProps = {
  deleteFruit: (fruitName: string) => void,
  toggleDeleteButtons: () => void
}

type Props = StateProps & DispatchProps;

function Hello(
  {
    showDeleteButtons,
    fruits,
    deleteFruit,
    toggleDeleteButtons
  }: Props
) {
  return <div>
    <h1>Hello, I like:</h1>
    <ul>
      {
        fruits.map(name => <li key={name}>
          {name}
          {
            showDeleteButtons && <button title="delete" onClick={() => deleteFruit(name)}>x</button>
          }
        </li>)
      }
    </ul>
    <div>
      <button onClick={toggleDeleteButtons}>Show/Hide Delete Buttons</button>
    </div>
  </div>
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  fruits: state.apiState.fruits,
  showDeleteButtons: state.formOnlyState.showDeleteButtons
})

const mapDispatchToProps = (dispatch: Dispatch<ApplicationActions>): DispatchProps => ({
  deleteFruit: (name) => dispatch(deleteFruitAction(name)),
  toggleDeleteButtons: () => dispatch(toggleDeleteButtons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
