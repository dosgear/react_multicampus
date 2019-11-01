import Constant from "../Constant";

const TimeActionCreator = {
  changeTime() {
    return { type: Constant.CHANGE_TIME, payload: { currentTime: new Date() } };
  },
  asyncChangeTime() {
    return (dispatch, getState) => {
      let { currentTime } = getState();
      dispatch({ type: "changeTime started!!", prevTime: currentTime.toLocaleTimeString() });
      setTimeout(() => {
        dispatch(this.changeTime());
      }, 2000);
    };
  }
};

export default TimeActionCreator;
