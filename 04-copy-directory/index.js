const fs = require("fs/promises");
const path = require("path");
const dir = path.join(__dirname, "files");
const dircopy = path.join(__dirname, "files-copy");

fs.rm(dircopy, {
  recursive: true,
  force: true,
}).then(function () {
  fs.mkdir(dircopy, {
    recursive: true,
  });
  fs.readdir(dir, {
    withFileTypes: true,
  }).then(function (data) {
    data.forEach(function (item) {
      if (item.isFile()) {
        let pathItem = path.join(dir, item.name);
        let pathItemDes = path.join(dircopy, item.name);
        fs.copyFile(pathItem, pathItemDes);
      }
    });
  });
});
