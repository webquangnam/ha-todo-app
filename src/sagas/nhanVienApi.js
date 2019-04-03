const getNhanVienApi = function* getNhanVienApi() {
//const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
const json = yield fetch('http://vntests.com/APIReact/dsnhanvien.php')
  .then(response => response.json(), );
  return yield json;
};

const addNhanVienApi = function* addNhanVienApi(data) {
  //const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
  const json = yield fetch('http://vntests.com/APIReact/addnhanvien.php', { method: 'POST', body: data.item })
    .then(response => response.json(), );
    return yield json;
  };

  // const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts/', { method: 'POST', body: item })
    // .then(response => response.json(), );


export const nhanVienApi = {
  getNhanVienApi, addNhanVienApi
};
      