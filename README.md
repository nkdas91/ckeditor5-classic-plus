# CKEditor 5 classic with Simple Upload Adapter

#### Note:

**This is a custom build of CKEditor 5 with Simple Upload Adapter Plugin.**

## Documentation

Please check CKEditor 5 Editor official documentation:

-   [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
-   [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
-   [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
-   [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) for how to customize the build (configure and rebuild the editor bundle).

## Quick start

First, install the build from npm:

```bash
npm install --save @ckeditor/ckeditor5-build-classic-simple-upload-adapter
```

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@ckeditor/ckeditor5-build-classic-simple-upload-adapter/build/ckeditor.js"></script>
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

Or in your JavaScript application:

```js
import ClassicEditor from '@ckeditor/ckeditor5-build-classic-simple-upload-adapter';

// Or using the CommonJS version:
// const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic-simple-upload-adapter' );

ClassicEditor
	.create(document.querySelector('#editor'))
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
	.then( editor => {
		window.editor = editor;
	})
	.catch( err => {
		console.error(err.stack);
	});
```

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
