# fileliststream

Given a FileList, turn it into a FileListStream.

[![NPM](https://nodei.co/npm/fileliststream.png)](https://nodei.co/npm/fileliststream/)

Uses [filereader-stream](https://github.com/maxogden/filereader-stream) to read the individual files in the FileList.

# install

Use it with npm & [browserify >= 3.0](/substack/node-browserify)

```bash
$ npm install fileliststream
```

# example
```js
const FileListStream = require('fileliststream');
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
