//Saga effects
import { fork, all } from 'redux-saga/effects';
import { watchFetchListNhanVien, watchFetchAddNhanVien } from './nhanVienSaga';

const rootSaga = function* rootSaga() {
    yield all([
        fork(watchFetchListNhanVien, watchFetchAddNhanVien)
    ]);
};

export default rootSaga;