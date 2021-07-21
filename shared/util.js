const fs = require("fs");
const path = require("path");

const readDirSync = (dir, filter = () => true) => {
  const rs = [];
  if (!fs.existsSync(dir)) {
    return rs;
  }
  const files = fs.readdirSync(dir);
  files.filter((filename, index) => filter(filename, index)).forEach((filename) => {
    const p = path.join(dir, filename);
    const info = fs.statSync(p);
    if (info.isDirectory()) {
      rs.push(...readDirSync(p, filter));
    } else {
      rs.push(p);
    }
  });
  return rs;
};

module.exports.readDirSync = readDirSync;
