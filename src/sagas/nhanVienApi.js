const getNhanVienApi = function* getNhanVienApi() {
//const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
const json = yield fetch('http://webquangnam.net/APIReact/dsnhanvien.php')
  .then(response => response.json(), );
  return yield json;
};

const addNhanVienApi = function* addNhanVienApi(data) {
  console.log('dataAdd', data.item);
  //const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
  const json = yield fetch('http://webquangnam.net/APIReact/addnhanvien.php', { method: 'POST', body: data.item })
     .then(response => response.json(), );
     return yield json;
};

// edit nhan vien
const editNhanVienApi = function* editNhanVienApi(data) {
  //const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
  console.log('dataEdit', data.item); 
  const json = yield fetch('http://webquangnam.net/APIReact/editnhanvien.php', { method: 'POST', body: data.item })
    .then(response => response.json(), );
    
    return yield json;
  };

// del nhan vien
const delNhanVienApi = function* delNhanVienApi(data) {
  //const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
  console.log('dataDelete', data.item);
  const json = yield fetch('http://webquangnam.net/APIReact/delnhanvien.php', { method: 'POST', body: data.item })
    .then(response => response.json(), );
    return yield json;
  };

  // const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts/', { method: 'POST', body: item })
    // .then(response => response.json(), );


export const nhanVienApi = {
  getNhanVienApi, addNhanVienApi, editNhanVienApi, delNhanVienApi
};
      