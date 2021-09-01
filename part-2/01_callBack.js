const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath,"utf8",(err,data) =>{
    if(data) return callback(null,data);
    else return callback(err,null);
  })
};

// getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};