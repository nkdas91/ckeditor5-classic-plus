# CKEditor 5 - Classic Plus

***CKEditor 5 Classic Plus** is a [Custom Build](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) built on top of [CKEditor 5 Build - Classic](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor) (version: 36.0.1). It adds Simple Upload Adapter, Image Resize, Font Styling and much more to the official build.*

[![Live demo button](https://neerajdas.com/ckeditor5-classic-plus/images/live_demo_button.webp)](https://neerajdas.com/ckeditor5-classic-plus/)

![CKEditor 5 - Classic Plus sample image](https://neerajdas.com/ckeditor5-classic-plus/images/ckeditor.png)

***Note,** If you are looking for an easy way to create a custom build of [CKEditor 5](https://ckeditor.com/), check the [online builder](https://ckeditor.com/ckeditor-5/online-builder/), which allows you to easily create a custom build through a simple and intuitive UI.*

## What's added to the official build?
- [Basic Text Styles](https://ckeditor.com/docs/ckeditor5/latest/features/basic-styles.html)
- [Text Alignment](https://ckeditor.com/docs/ckeditor5/latest/features/text-alignment.html)
- [Font](https://ckeditor.com/docs/ckeditor5/latest/features/font.html)
- [Code Block](https://ckeditor.com/docs/ckeditor5/latest/features/code-blocks.html)
- [Horizontal Line](https://ckeditor.com/docs/ckeditor5/latest/features/horizontal-line.html)
- [Simple Upload Adapter](https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/simple-upload-adapter.html)
- [Image Link](https://ckeditor.com/docs/ckeditor5/latest/features/image.html#linking-images)
- [Image Resize](https://ckeditor.com/docs/ckeditor5/latest/features/image.html#resizing-images)
- [Find And Replace](https://ckeditor.com/docs/ckeditor5/latest/features/find-and-replace.html)

## Quick start

### React

Installation

```bash
npm i @ckeditor/ckeditor5-react
npm i ckeditor5-classic-plus
```

Usage

```js
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-classic-plus";

export default function MyEditor() {
  const [article, setArticle] = useState();
  
  return (
    <CKEditor
      editor={ClassicEditor}
      data={article}
      onReady={editor => {
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
          
          // Enable the XMLHttpRequest.withCredentials property if required.
          withCredentials: true,

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

CKEditor 5 React documentation: [https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html)  

Simple upload adapter documentation: [https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/simple-upload-adapter.html](https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/simple-upload-adapter.html)

### JS

Installation

```bash
npm i ckeditor5-classic-plus
```

Usage

```js
import ClassicEditor from 'ckeditor5-classic-plus';

// Or using the CommonJS version:
// const ClassicEditor = require('ckeditor5-classic-plus');

ClassicEditor
  .create(document.querySelector('#editor'), {
  simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: "http://example.com",
      
      // Enable the XMLHttpRequest.withCredentials property if required.
      withCredentials: true,

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
  .catch(error => {
    console.error('There was a problem initializing the editor.', error);
  });
```

### HTML

Installation using NPM

```bash
npm i ckeditor5-classic-plus
```

OR You may use the CDN

jsDelivr
```bash
https://cdn.jsdelivr.net/npm/ckeditor5-classic-plus@36.0.1/build/ckeditor.js
```

OR

UNPKG
```bash
https://unpkg.com/ckeditor5-classic-plus@36.0.1/build/ckeditor.js
```

Usage

```html
<div id="editor">
  <p>This is the editor content.</p>
</div>
<script src="./node_modules/ckeditor5-classic-plus/build/ckeditor.js"></script>

<!--Using CDN-->
<!--<script src="https://unpkg.com/ckeditor5-classic-plus@36.0.1/build/ckeditor.js"></script>-->

<script>
  ClassicEditor.create(document.querySelector("#editor"), {
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: "http://example.com/",
      
      // Enable the XMLHttpRequest.withCredentials property if required.
      withCredentials: true,

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
  .catch(error => {
    console.error('There was a problem initializing the editor.', error);
  });
</script>
```

## CKEditor 5 official documentation
* [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
* [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
