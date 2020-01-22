# CKEditor 5 Build - Classic Plus
[![npm version](https://badge.fury.io/js/ckeditor5-classic-plus.svg)](https://badge.fury.io/js/ckeditor5-classic-plus)

### Very Important Notes:

- **This is a CUSTOM BUILD of CKEditor 5 Build - Classic with Simple Upload Adapter and Code Block plugin.**  
- **It is important that you use the STABLE BRANCH of this build, not the master branch.**

## What's Included
- [Simple Upload Adapter](https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/simple-upload-adapter.html)
- [Code Block](https://ckeditor.com/docs/ckeditor5/latest/features/code-blocks.html)

## Quick start

### React

Installation

```bash
npm i @ckeditor/ckeditor5-react
npm i ckeditor5-classic-plus
```

```js
import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-classic-plus";

export default function MyEditor() {
  const [article, setArticle] = useState();
  
  return (
    <CKEditor
      editor={ClassicEditor}
      data={article}
      onInit={editor => {
        // You can store the "editor" and use when it is needed.
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setArticle(data);
      }}
      config={{
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: "http://example.com",

          // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
            "X-CSRF-TOKEN": "CSFR-Token",
            Authorization: "Bearer <JSON Web Token>"
          }
        }
      }}
    />
  );
}
```

### JS

Installation

```bash
npm i ckeditor5-classic-plus
```

```js
import ClassicEditor from 'ckeditor5-classic-plus';

// Or using the CommonJS version:
// const ClassicEditor = require('ckeditor5-classic-plus');

ClassicEditor
  .create(document.querySelector('#editor'), {
  simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: "http://example.com",

      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        "X-CSRF-TOKEN": "CSFR-Token",
        Authorization: "Bearer <JSON Web Token>"
      }
    }
  })
  .then( editor => {
    window.editor = editor;
  })
  .catch( err => {
    console.error(err.stack);
  });
```

### HTML

Installation

```bash
npm i ckeditor5-classic-plus
```

```html
<div id="editor">
  <p>This is the editor content.</p>
</div>
<script src="./node_modules/ckeditor5-classic-plus/build/ckeditor.js"></script>
<script>
  ClassicEditor.create(document.querySelector("#editor"), {
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: "http://example.com/",

      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        "X-CSRF-TOKEN": "CSFR-Token",
        Authorization: "Bearer <JSON Web Token>"
      }
    }
  })
  .then(editor => {
    window.editor = editor;
  })
  .catch(err => {
    console.error(err.stack);
  });
</script>
```

## CKEditor 5 Official Resources

-   [CKEditor 5](https://ckeditor.com/)
