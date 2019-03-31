import {
    LIST_NHANVIEN,
    LIST_NHANVIEN_SUCCESS,
    LIST_NHANVIEN_FAIL
   } from '../constants/actionType';
   
   //Saga effects
   import { put, takeLatest } from 'redux-saga/effects';
   import { getNhanVienApiList } from './nhanVienApi';
   
   // ListNhanVien
   const fetchListNhanVien = function* fetchListNhanVien() {
     try {
         const receivedData = yield getNhanVienApiList.getNhanVienApi();
         yield put({ type: LIST_NHANVIEN_SUCCESS, data: receivedData });
     } catch (error) {
         yield put({ type: LIST_NHANVIEN_FAIL, error });
     }
   };
   
   export const watchFetchListNhanVien = function* watchFetchListNhanVien() {
       yield takeLatest(LIST_NHANVIEN, fetchListNhanVien);
   };