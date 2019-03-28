import {LIST_TODO, ADD_TODO, DELETE_TODO, ADD_TO_EDIT_TODO, EDIT_TODO} from '../constants/actionType';

export const listTodo = () => {
    return{
        type: LIST_TODO
    };
};

export const addTodo = item => {
    return{
        type: ADD_TODO,
        item
    };
};
export const deleteTodo = index => {
    return{
        type: DELETE_TODO,
        index
    };
};
export const addToEditTodo = (index, item) => {
    return{
        type: ADD_TO_EDIT_TODO,
        index,
        item
    };
};
export const editTodo = (item) => {
    return{
        type: EDIT_TODO,
        item
    };
};


