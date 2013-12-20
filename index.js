const Stream = require('stream');
const FileStream = require('filereader-stream');

function FileListStream(fileList, options) {
  if (!(this instanceof FileListStream))
    return new FileListStream(fileList, options);
  this.files = [].slice.call(fileList).map(function (file) {
    return new FileStream(file, options);
  });
  this.files.forEach(function (file, idx) {
    this[idx] = file;
  }, this);
};

module.exports = FileListStream;