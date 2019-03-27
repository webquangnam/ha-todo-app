import {
    LIST_TODO,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
} from '../constants/actionType';

//let todoItems = [];
let initData = {
    data: [],
    editData: {},
    editIndex: 0,
    edit: false
}


// todoItems.push({ index: 1, value: "learn react", done: false });
// todoItems.push({ index: 2, value: "Go shopping", done: true });
// todoItems.push({ index: 3, value: "buy flowers", done: true });

const toDoReducer = (data = initData, action) => {
    switch (action.type) {
        case LIST_TODO:
           return data;
        case ADD_TODO:            
            // let value = {  index: data.data.length + 1, value: action.item.newItemValue, done: false };
           data.data = [...data.data, {  index: data.data.length + 1, value: action.item.newItemValue, done: false }];
           //data.data =  [...data.data, {  index: 3, value: 'abc', done: false }];
           //data.data.unshift(...data.data, { index: data.data.length + 1, value: action.item.newItemValue, done: false  });
           //console.log('data', data);
          return {...data};

        case DELETE_TODO:      
            data.data.splice(action.index, 1);
            return {...data};
        case EDIT_TODO:
            console.log('EDIT_TODO',action.item.index + ' - ' + action.item.value );
            //todoItems[this.state.indexId].value = item.newItemValue;
            data.data[action.index].value = 'adasdasuuuuuuuuuuu';
            return {...data};
        default:
          return data;
      }
}

export default toDoReducer;