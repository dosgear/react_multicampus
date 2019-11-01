import Constant from "../Constant";

const initialState = {
  currentTime: new Date()
};

const TimeReducer = (currentTime = initialState.currentTime, action) => {
  switch (action.type) {
    case Constant.CHANGE_TIME:
      return action.payload.currentTime;
    default:
      return currentTime;
  }
};

export default TimeReducer;
