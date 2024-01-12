import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';

type Action = { type: 'SIDEBAR_OPEN' } | { type: 'SIDEBAR_CLOSE' };
type State = { isSidebarOpen: boolean };

const products_reducer = (state: State, action: Action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
};

export default products_reducer;
