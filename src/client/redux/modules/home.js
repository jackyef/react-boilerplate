// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_ABOUT_VISITED = 'UPDATE_ABOUT_VISITED';

export const initialState = {
  aboutVisited: false,
};

// ------------------------------------
// Actions
// ------------------------------------

export function updateAboutVisited(payload) {
  return {
    type: UPDATE_ABOUT_VISITED,
    payload,
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_ABOUT_VISITED]: (state, action) => {
    return {
      ...state,
      aboutVisited: action.payload,
    }
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
