/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Font } from '@ckeditor/ckeditor5-font';
import { Underline, Strikethrough, Code, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { LinkImage } from '@ckeditor/ckeditor5-link';
import { ImageResize } from '@ckeditor/ckeditor5-image';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof Essentials | typeof CKFinderUploadAdapter | typeof Autoformat | typeof Font | typeof Bold | typeof Italic | typeof Underline | typeof Strikethrough | typeof Code | typeof Subscript | typeof Superscript | typeof Alignment | typeof BlockQuote | typeof CKBox | typeof CKFinder | typeof CloudServices | typeof EasyImage | typeof Heading | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageResize | typeof Indent | typeof Link | typeof LinkImage | typeof List | typeof MediaEmbed | typeof Paragraph | typeof PasteFromOffice | typeof PictureEditing | typeof Table | typeof TableToolbar | typeof TextTransformation | typeof CodeBlock | typeof HorizontalLine | typeof SimpleUploadAdapter | typeof FindAndReplace)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
            shouldNotGroupWhenFull: boolean;
        };
        image: {
            styles: {
                options: string[];
            };
            resizeOptions: ({
                name: string;
                label: string;
                value: null;
            } | {
                name: string;
                label: string;
                value: string;
            })[];
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
