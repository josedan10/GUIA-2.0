import React from 'react';
import ReactDOM from 'react-dom';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MenuAdmin from './components/MenuAdmin';
import Timer from './components/Timer';

ReactDOM.render(
    <MenuAdmin />,
    document.getElementById('admin-panel')
);

ReactDOM.render(
    <Timer />,
    document.getElementById('timer')
);

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );
