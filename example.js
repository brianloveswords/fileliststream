const FileListStream = require('./');
const body = document.body;

// make it so console can be piped to.
console.write = function(obj) { console.log(obj.toString()) };

function noop(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

['dragenter',
 'dragleave',
 'dragexit',
 'dragover'
].forEach(function (eventType) {
   body.addEventListener(eventType, noop);
});

body.addEventListener('drop', function (event) {
  event.stopPropagation();
  event.preventDefault();

  const fileList = FileListStream(event.dataTransfer.files);

  fileList.files.map(function(file) {
     file.pipe(console);
  });

  return false;
});
