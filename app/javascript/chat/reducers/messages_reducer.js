import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED , SET_CHANNELS} from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload;
    }
    case MESSAGE_POSTED: {
      console.log('state',state)
      console.log('state.messages',state.messages)
      const copiedState = state.slice(0);
      console.log('copiedState',copiedState)
      copiedState.push(action.payload);
      console.log('action.payload',action.payload)
      console.log('copiedState',copiedState)
      return copiedState;
    }
    // case SET_CHANNELS: {
    //   return action.payload; // Channel has changed. Clearing view.
    // }
    default:
      return state;
  }
}
