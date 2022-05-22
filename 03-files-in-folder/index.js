const path = require('path');
const fs = require('fs');
const folderFiles = path.join(__dirname, './secret-folder');

fs.readdir(folderFiles, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      if (!file.isDirectory()) {
        fs.stat(path.join(folderFiles, file.name), (err, stats) => {
          console.log(
            `${file.name.split('.').slice(0, -1).join('.')} - ${path
              .extname(file.name)
              .substring(1, path.extname(file.name).length)} - ${(
              stats.size / 1024
            ).toFixed(2)} kb`
          );
        });
      }
    });
  }
});
