import './editor.scss';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const EditorComponent = (): JSX.Element => {

    const [text, setText] = useState("Enter Text here");
    return <>
        <div className='editor-parent'>
        <ReactQuill theme="snow" value={text} onChange={setText}/>
        </div>
    </>
}

export default EditorComponent;