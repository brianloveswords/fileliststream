# fileliststream

Given a FileList, turn it into a FileListStream.

[![NPM](https://nodei.co/npm/fileliststream.png)](https://nodei.co/npm/fileliststream/)

# install

Use it with npm & [browserify >= 3.0](/substack/node-browserify)

```bash
$ npm install fileliststream
```

# example
```js
const FileListStream = require('fileliststream');
const body = document.body;

// make it so console can be piped to.
console.write = console.log;

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
```

# usage

```js
FileListStream(fileList, [options])
```

`options` can specify `output`. Possible values are:

* `arraybuffer` [default]
* `binary` 
* `dataurl`
* `text`

You can also specify `chunkSize`, default is `8128`. This is how many bytes will be read and written at a time to the stream you get back for each file.

You can access the individual `FileStream`s by index on the
`FileListStream` instance, or directly through the `files` property,
which is a true array.
