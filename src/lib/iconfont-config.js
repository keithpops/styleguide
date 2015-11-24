var version = process.env.npm_package_version;

var filename = `namely-ui-${version.replace(/\./g,'_')}-icons`;
var filePath = process.env.NODE_ENV === "production" ? "https://dzmqh46i6l1ir.cloudfront.net/public/" : "/fonts/";

module.exports = {
  version: version,
  filename: filename,
  path: filePath,
  fullPath: `${filePath}${filename}`,
};
