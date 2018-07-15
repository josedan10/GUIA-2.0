import React from 'react';
import ReactDOM from 'react-dom';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MenuAdmin from './components/MenuAdmin';

ReactDOM.render(
    <MenuAdmin />,
    document.getElementById('admin-panel')
);

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );
