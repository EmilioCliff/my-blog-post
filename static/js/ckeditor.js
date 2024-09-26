import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Font, 
    Indent,
    IndentBlock,
    BlockQuote, 
    Link, 
    List, 
    Heading,
    CodeBlock,
    Code
} from 'ckeditor5';

ClassicEditor
    .create( document.querySelector( '#comment' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic, Font, Indent, IndentBlock, BlockQuote, Link, List, Heading, ClassicEditor, CodeBlock, Code ],
        toolbar: [
'undo', 'redo', '|', 'bold', 'italic', '|', 'heading',
'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
            'indent', 'outdent', '|', 'blockQuote', 'numberedList', 'bulletedList', 
            'code', 'codeBlock'
],
        heading: {
options: [
    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
]
},
codeBlock: {
languages: [
    { language: 'css', label: 'CSS' },
    { language: 'html', label: 'HTML' },
    { language: 'go', label: 'Go', class: 'language-go' }
]
},
fontFamily: {
options: [
    'default',
    'Ubuntu, Arial, sans-serif',
    'Ubuntu Mono, Courier New, Courier, monospace'
]
},
fontColor: {
colorPicker: {
    // Use 'hex' format for output instead of 'hsl'.
    format: 'hex'
}
},
    } )
    .then( editor => {
        window.editor = editor;
        hljs.highlightAll();
        document.querySelectorAll('pre code').forEach(block => {
    // hljs.highlightBlock(block);
});

// Apply highlight.js after every content change
editor.model.document.on('change:data', () => {
    document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block);
    });
});
    } )
    .catch( error => {
        console.error( error );
    } );