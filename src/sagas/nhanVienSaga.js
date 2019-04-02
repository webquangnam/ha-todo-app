import {
    LIST_NHANVIEN,
    LIST_NHANVIEN_SUCCESS,
    LIST_NHANVIEN_FAIL,
    ADD_NHANVIEN,
    ADD_NHANVIEN_SUCCESS,
    ADD_NHANVIEN_FAIL
    
   } from '../constants/actionType';
   
   //Saga effects
   import { put, takeLatest } from 'redux-saga/effects';
   import { nhanVienApi } from './nhanVienApi';
   
   // ListNhanVien
   const fetchListNhanVien = function* fetchListNhanVien() {
     try {
         const receivedData = yield nhanVienApi.getNhanVienApi();
         yield put({ type: LIST_NHANVIEN_SUCCESS, data: receivedData });
     } catch (error) {
         yield put({ type: LIST_NHANVIEN_FAIL, error });
     }
   };
   export const watchFetchListNhanVien = function* watchFetchListNhanVien() {
       yield takeLatest(LIST_NHANVIEN, fetchListNhanVien,);
   };

// addNhanVien
   const fetchAddNhanVien = function* fetchAddNhanVien(item) {
    try {
        const receivedData = yield nhanVienApi.addNhanVienApi(item);
        yield put({ type: ADD_NHANVIEN_SUCCESS, data: receivedData });
    } catch (error) {
        yield put({ type: ADD_NHANVIEN_FAIL, error });
    }
  };
export const watchFetchAddNhanVien = function* watchFetchAddNhanVien() {
    yield takeLatest(ADD_NHANVIEN, fetchAddNhanVien);
};