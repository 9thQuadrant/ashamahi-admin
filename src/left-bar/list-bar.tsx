
import { deleteDoc, doc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { updateCurrentStory } from '../services/appActions';
import { AppContext } from '../services/context';
import firestore from '../services/firebase';
import './list-bar.scss';

const ListOfPostsComponent = (): JSX.Element => {

    const { state: {storiesList}, dispatch } = useContext(AppContext) as any;
    const [localList, setLocalList] = useState({...storiesList});

    function setStoryForEdit(index: string) {
        console.log(index);
        dispatch(updateCurrentStory(localList[index]));
    }

    function deletePage(id: string) {

        deleteDoc(doc(firestore, "pages", id)).then((e)=>{
            dispatch(updateCurrentStory(null));
        });
    }

    useEffect(()=>{
        setLocalList({...storiesList});
        console.log("listbar:context update");
    }, [storiesList]);


    return <>
    <div className='posts-list-parent'>
        <ul>
            {
                Object.keys(localList).length ? Object.keys(localList)?.map((index: string) => {
                    return <>
                        <li className='w3-border-bottom w3-padding cursor' key={index} onClick={()=>{setStoryForEdit(index)}}>
                            <div className='w3-large'>{localList[index].title}</div>
                            <div className='w3-small'>{localList[index].shortnote}</div>
                            <button className="delete" onClick={()=>{deletePage(localList[index].id)}}>Delete</button>
                        </li>
                    </>
                }) : <></>
            }
        </ul>
    </div>
    </>
}

export default ListOfPostsComponent;