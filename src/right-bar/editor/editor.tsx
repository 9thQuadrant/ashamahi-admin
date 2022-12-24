import './editor.scss';
import { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import firestore from '../../services/firebase';
import { emptyStory, IStory } from '../../services/interface';
import { AppContext } from '../../services/context';


const EditorComponent = (): JSX.Element => {

    const { state: { currentStory } } = useContext(AppContext) as any;
    const [editorText, setEditorText] = useState(currentStory?.content ? currentStory.content : "");
    const [localStory, setLocalStory] = useState(currentStory ? { ...currentStory } : null);

    function createPage() {
        addDoc(collection(firestore, "pages"), emptyStory);
    }

    function updatePage() {

        const uDoc = { ...localStory };
        updateDoc(doc(firestore, "pages", uDoc.id), uDoc).then((d) => { console.log(d) });

    }

    useEffect(() => {

        const temp: IStory = { ...localStory };
        temp['content'] = editorText || '';
        setLocalStory(temp);
    // eslint-disable-next-line
    }, [editorText]);

    useEffect(() => {
        setLocalStory(currentStory ? { ...currentStory }: null);
        setEditorText(currentStory?.content ? currentStory.content : "");
        console.log("edtior: context update", currentStory);
    }, [currentStory]);

    return localStory
        ? <>
            <div className='editor-parent'>
                <button onClick={() => { createPage() }}>Create</button>
                <button onClick={() => { updatePage() }}>Update</button>
                <ReactQuill theme="snow" value={editorText} onChange={(e) => { setEditorText(e) }} />
            </div>
        </>
        : <></>;

}

export default EditorComponent;