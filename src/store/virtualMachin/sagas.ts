import {
  all,
  // fork,
  // takeEvery,
} from "redux-saga/effects";
// import { ActionTypes } from "./types";

// function* handleFetch() {
//   try {
//     yield console.log('test');
//   } catch (err) {
//     yield console.log('test');
//   }
// }
// function* watchFetchRequest() {
//   yield takeEvery(ActionTypes.FETCH_VM_MACHINE, handleFetch);
// }
function* virtualMachinSaga() {
  yield all([]);
}
export default virtualMachinSaga;
