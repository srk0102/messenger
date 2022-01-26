export const countReducer = function (state = {user: {}}, action) {
  switch (action.type) {
    case "userDetails":
      return {...state, user : action.payload}
    default:
      return state;
  }
};