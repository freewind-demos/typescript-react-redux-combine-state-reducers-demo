import {ApiState} from './apiState/ApiState';
import {FormOnlyState} from './formOnlyState/FormOnlyState';
import {ApiStateActions} from './apiState/actions';
import {FormStateActions} from './formOnlyState/actions';

export type ApplicationActions = ApiStateActions | FormStateActions;

export type ApplicationState = {
  apiState: ApiState,
  formOnlyState: FormOnlyState
}
