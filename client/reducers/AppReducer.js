import * as actions from '../actions/constants';

const initialState = {
  message: "Hey there!"
}

function AppReducer(prevState = initialState, action) {
  switch(action.type) {
    case actions.UPDATE_MESSAGE:
      const message = Math.random() >= 0.5 ? "You rock!" : "You roll!";
      return Object.assign({}, { message })
    default:
      return prevState;
  }
}

export default AppReducer;