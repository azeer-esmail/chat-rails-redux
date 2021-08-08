import { SET_CHANNELS} from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_CHANNELS: {
      return action.payload; // Channel has changed. Clearing view.
    }
    default:
      return state;
  }
}
