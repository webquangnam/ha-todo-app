import {
    LIST_NHANVIEN_SUCCESS,
    LIST_NHANVIEN_FAIL,
    ADD_NHANVIEN_SUCCESS,
    ADD_NHANVIEN_FAIL,
    EDIT_NHANVIEN_SUCCESS,
    EDIT_NHANVIEN_FAIL,
    DEL_NHANVIEN_SUCCESS,
    DEL_NHANVIEN_FAIL
} from '../constants/actionType';

let initData = [];// status,

const nhanVienReducer = (data = initData, action) => {
    switch (action.type) {
        case LIST_NHANVIEN_SUCCESS:
            
            data = action.data;
          return data;
        case LIST_NHANVIEN_FAIL:
            return [];

        case ADD_NHANVIEN_SUCCESS:
            data = action.data;
            console.log('action', action);
            return data;

        case ADD_NHANVIEN_FAIL:
            return [];
        
        case EDIT_NHANVIEN_SUCCESS:
            data = action.data;
            return data;

        case EDIT_NHANVIEN_FAIL:
            return [];

        case DEL_NHANVIEN_SUCCESS:
            ///data = action.data;
            data.status = action.data.status;
            return data;

        case DEL_NHANVIEN_FAIL:
            return [];

        default:
          return data;
      }
}

export default nhanVienReducer;