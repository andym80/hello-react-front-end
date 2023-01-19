import axios from 'axios';

// Actions

const GET_GREETING_SUCCES = 'GET_GREETING_SUCCES';
const GET_GREETING_ERROR = 'GET_GREETING_ERROR';

// Action Creators

const greetings = [];

const getGreetingsSucces = () => ({
  type: GET_GREETING_SUCCES,
  payload: greetings,
});

const getGreetingsError = () => ({
  type: GET_GREETING_ERROR,
  payload: 'Error',
});

// Thunk

const getGreeting = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/greetings');
  const greeting = response.data;
  dispatch({
    type: GET_GREETING_SUCCES,
    payload: greeting,
  });
};

// Reducer

const reducer = (state = greetings, action) => {
  switch (action.type) {
    case GET_GREETING_SUCCES:
      return action.payload;
    case GET_GREETING_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
export { getGreeting, getGreetingsSucces, getGreetingsError };
