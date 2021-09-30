const initialState = null;

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTI":
      return action.payload;
    case "REMOVE_NOTI":
      return null;

    default:
      return state;
  }
};

export const setNotification = (notify) => {
  return {
    type: "ADD_NOTI",
    payload: notify,
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTI"
  }
};

export default notificationReducer;
