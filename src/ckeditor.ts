/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import {ClassicEditor as ClassicEditorBase} from '@ckeditor/ckeditor5-editor-classic';

import {Essentials} from '@ckeditor/ckeditor5-essentials';
import {CKFinderUploadAdapter} from '@ckeditor/ckeditor5-adapter-ckfinder';
import {Autoformat} from '@ckeditor/ckeditor5-autoformat';
import {Bold, Italic} from '@ckeditor/ckeditor5-basic-styles';
import {BlockQuote} from '@ckeditor/ckeditor5-block-quote';
import {CKBox} from '@ckeditor/ckeditor5-ckbox';
import {CKFinder} from '@ckeditor/ckeditor5-ckfinder';
import {EasyImage} from '@ckeditor/ckeditor5-easy-image';
import {Heading} from '@ckeditor/ckeditor5-heading';
import {Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing} from '@ckeditor/ckeditor5-image';
import {Indent} from '@ckeditor/ckeditor5-indent';
import {Link} from '@ckeditor/ckeditor5-link';
import {List} from '@ckeditor/ckeditor5-list';
import {MediaEmbed} from '@ckeditor/ckeditor5-media-embed';
import {Paragraph} from '@ckeditor/ckeditor5-paragraph';
import {PasteFromOffice} from '@ckeditor/ckeditor5-paste-from-office';
import {Table, TableToolbar} from '@ckeditor/ckeditor5-table';
import {TextTransformation} from '@ckeditor/ckeditor5-typing';
import {CloudServices} from '@ckeditor/ckeditor5-cloud-services';

// Added plugins
import {Font} from '@ckeditor/ckeditor5-font';
import {Underline, Strikethrough, Code, Subscript, Superscript} from '@ckeditor/ckeditor5-basic-styles';
import {Alignment} from '@ckeditor/ckeditor5-alignment';
import {CodeBlock} from '@ckeditor/ckeditor5-code-block';
import {HorizontalLine} from '@ckeditor/ckeditor5-horizontal-line';
import {SimpleUploadAdapter} from '@ckeditor/ckeditor5-upload';
import {LinkImage} from '@ckeditor/ckeditor5-link';
import {ImageResize} from '@ckeditor/ckeditor5-image';
import {FindAndReplace} from '@ckeditor/ckeditor5-find-and-replace';

export default class ClassicEditor extends ClassicEditorBase {

    public static override builtinPlugins = [
        Essentials,
        CKFinderUploadAdapter,
        Autoformat,
        Font,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Code,
        Subscript,
        Superscript,
        Alignment,
        BlockQuote,
        CKBox,
        CKFinder,
        CloudServices,
        EasyImage,
        Heading,
        Image,
        ImageCaption,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        ImageResize,
        Indent,
        Link,
        LinkImage,
        List,
        MediaEmbed,
        Paragraph,
        PasteFromOffice,
        PictureEditing,
        Table,
        TableToolbar,
        TextTransformation,
        CodeBlock,
        HorizontalLine,
        SimpleUploadAdapter,
        FindAndReplace
    ];

    public static override defaultConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'fontFamily',
                'fontSize',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'subscript',
                'superscript',
                'code',
                '|',
                'alignment',
                '|',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                'horizontalLine',
                'codeBlock',
                'blockQuote',
                'insertTable',
                '|',
                'link',
                'uploadImage',
                'mediaEmbed',
                '|',
                'undo',
                'redo',
                'findAndReplace'
            ],
            shouldNotGroupWhenFull: true
        },
        image: {
            // Configure the available styles.
            styles: {
                options: [
                    'alignLeft', 'alignCenter', 'alignRight'
                ]
            },

            // Configure the available image resize options.
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'resizeImage:75',
                    label: '75%',
                    value: '75'
                },
                {
                    name: 'resizeImage:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'resizeImage:25',
                    label: '25%',
                    value: '25'
                }
            ],

            toolbar: [
                'resizeImage',
                '|',
                'imageStyle:alignLeft',
                'imageStyle:alignCenter',
                'imageStyle:alignRight',
                '|',
                'linkImage',
                '|',
                'imageTextAlternative'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'en'
    };
}
