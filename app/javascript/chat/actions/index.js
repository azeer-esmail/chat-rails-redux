const BASE_URL = '/api/v1';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const SET_CHANNELS = 'SET_CHANNELS';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/channels/${channel}/messages`;
  const promise = fetch(url,
    { credentials: "same-origin"},
    {headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }}).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, content) {
  const url = `${BASE_URL}/channels/${channel}/messages`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const body = { content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function setChannel(channel) {
  return {
    type: SET_CHANNELS,
    payload: channel
  };
}
