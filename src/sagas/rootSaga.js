//Saga effects
import { fork, all } from 'redux-saga/effects';
import { watchFetchListNhanVien } from './nhanVienSaga';

const rootSaga = function* rootSaga() {
    yield all([
        fork(watchFetchListNhanVien)
    ]);
};

export default rootSaga;