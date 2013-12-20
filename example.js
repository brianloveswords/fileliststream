const FileListStream = require('./');
const body = document.body;
const drop = require("drag-and-drop-files");

// make it so console can be piped to.
console.write = function(obj) { console.log(obj.toString()) };

drop(body, function(files) {
  
  const fileList = FileListStream(event.dataTransfer.files);

  fileList.files.map(function(file) {
     file.pipe(console);
  });
    
});