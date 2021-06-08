import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import api from "../../api/contact";

function* enrtyContact(action) {
  console.log("--sagas: add Todo --");
  console.log(action);

  try {
    const result = yield call(api.entry, action.payload);
    console.log(result);

    yield put({
      type: "ENTRY_CONTACT_SUCCEEDED",
      payload: { id: result.data.id, ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}
function* fetchContactList(action) {
  console.log(action);
  try {
    const result = yield call(api.fetch);
    yield put({ type: "FETCH_CONTACTLIST_SUCCEEDED", payload: result.data });
  } catch (e) {
    alert(e.message);
  }
}

function* removeContact(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);
    yield put({
      type: "REMOVE_CONTACT_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyContact(action) {
  try {
    const result = yield call(api.modify, action.payload);
    yield put({
      type: "MODIFY_CONTACT_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* contactSaga() {
  yield takeEvery("ENTRY_CONTACT", enrtyContact);
  yield takeEvery("REMOVE_CONTACT", removeContact);
  yield takeLatest("FETCH_CONTACTLIST", fetchContactList);
  yield takeEvery("MODIFY_CONTACT", modifyContact);
}
export default contactSaga;
