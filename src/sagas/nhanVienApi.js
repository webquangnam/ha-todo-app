const getNhanVienApi = function* getNhanVienApi() {
//const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
const json = yield fetch('http://vntests.com/APIReact/dsnhanvien.php')
  .then(response => response.json(), );
  return yield json;
};

export const getNhanVienApiList = {
  getNhanVienApi
};
      